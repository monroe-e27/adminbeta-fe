import { useState, useCallback, useEffect } from "react";
import { useUserStore } from "../store/userStore";

export const useUserHook = (initialState: null | undefined = null) => {
  const siteUsers = useUserStore(state => state.siteUsers);
  const siteUser = useUserStore(state => state.siteUser);
  const doGetSiteUsers = useUserStore(state => state.doGetSiteUsers);

  const [profileUpdateFlag, setProfileUpdateFlag] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [error, setError] = useState(initialState);
  const [headlineSiteUser, setHeadlineSiteUser] = useState(initialState);
  const [nameSiteUser, setNameSiteUser] = useState(initialState);
  const [facebookSiteUser, setFacebookSiteUser] = useState(initialState);
  const [emailSiteUser, setEmailSiteUser] = useState(initialState);
  const [twitterSiteUser, setTwitterSiteUser] = useState(initialState);
  const [linkedinSiteUser, setLinkedinSiteUser] = useState(initialState);
  const [siteUserFilters, setSiteUserFilters] = useState(initialState);

  const handleEmail = useCallback((email: string) => setEmail(email), []);
  const handlePassword = useCallback((password: string) => setPassword(password), []);
  const handleError = useCallback((error: string) => setError(error), []);


  return {
    email,
    password,
    error,
    siteUsers,
    siteUser,
    headlineSiteUser,
    nameSiteUser,
    profileUpdateFlag,
    emailSiteUser,
    facebookSiteUser,
    twitterSiteUser,
    linkedinSiteUser,
    siteUserFilters,
    handleEmail,
    handlePassword,
    handleError,
    doGetSiteUsers,
    setHeadlineSiteUser,
    setNameSiteUser,
    setProfileUpdateFlag,
    setEmailSiteUser,
    setFacebookSiteUser,
    setTwitterSiteUser,
    setLinkedinSiteUser,
    setSiteUserFilters
  };
}
