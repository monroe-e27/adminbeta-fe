import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage } from "zustand/middleware";
import { startupsFetch } from "../api";
import { setUser } from "../utils/setUser";

const initialState = {
  startups: [],
  startup: {}
};

const store = (set: any, get: any) => ({
  //state
  ...initialState,
  doReset: () => set(initialState),
  doGetStartups: async (filter: any) => {
    try {
      console.log('filter:::',filter);
      let result = await startupsFetch(filter);
      console.log('result', result);
      if (result.status != 201) {
      } else {
        set({
          startups: result.data
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
});

export const useStartupStore = create(
  devtools(
    immer(
      persist(store, {
        name: "statup-store",
        storage: createJSONStorage(() => localStorage),
      })
    )
  )
);
