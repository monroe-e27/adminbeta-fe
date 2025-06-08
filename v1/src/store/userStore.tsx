import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage } from "zustand/middleware";
import { 
  userLogin, 
  siteUsersFetch, 
  siteUserFetch, 
  siteUserUpdateProfile 
} from "../api";
import { setUser } from "../utils/setUser";


const initialState = {
  jwtData: "",
  userAdminProfile: {
    id: "",
    email: "",
    name: ""
  },
  siteUsers: [],
  siteUser: {}
};

const store = (set: any, get: any) => ({
  //state
  ...initialState,
  setJwtData: (jwtData: string) => set({ jwtData }),
  doReset: () => set(initialState),
  doLogin: async (email: string, password: string) => {
    try {
      let result = await userLogin({
        email,
        password,
      });
      if (result.status != 201) {
        set({ jwtData: "" });
      } else {
        set({
          jwtData: setUser(result.token),
          userAdminProfile: result.data
        });
      }

      return result;


    } catch (e) { }
  },
  doUpdateSiteUserProfile: async (params:any, where:any) => {
    try {
      let result = await siteUserUpdateProfile(params, where);
      set({siteUser: {
        ...get().siteUser,
        name: params.name,
        headline: params.headline,
        email: params.email,
        facebook: params.facebook,
        twitter: params.twitter,
        linkedin: params.linkedin,
      }});
      return result;
    } catch (e) {
      console.log(e);
    }
  },
  doGetSiteUsers: async (filter: any) => {
    try {
      let result = await siteUsersFetch(filter);
      if (result.status != 201) {
      } else {
        set({
          siteUsers: result.data
        });
      }
      return result;
    } catch (e) {
      console.log(e);
    }
  },
  doGetSiteUser: async (filter: any) => {
    try {
      let result = await siteUserFetch(filter);
      if (result) { // Result structure is different due to meta query from wp
        set({
          siteUser: result
        });
      }
      return result;
    } catch (e) {
      console.log(e);
    }
  },
  doResetSiteUser: () => set({ siteUser: initialState.siteUser }),
  doResetSiteUsers: () => set({ siteUsers: initialState.siteUsers }),
});

export const useUserStore = create(
  devtools(
    immer(
      persist(store, {
        name: "user-store",
        storage: createJSONStorage(() => localStorage),
      })
    )
  )
);
