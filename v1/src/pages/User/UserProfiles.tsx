import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import UserMetaCard from "../../components/UserProfile/UserMetaCard";
import UserInfoCard from "../../components/UserProfile/UserInfoCard";
import UserAddressCard from "../../components/UserProfile/UserAddressCard";
import PageMeta from "../../components/common/PageMeta";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import { useUserHook } from "../../hooks/useUser";
import { useEffect } from "react";
import useLoader from "../../hooks/useLoader";

export default function UserProfiles() {
  const { username } = useParams();
  const { 
    siteUser, 
    headlineSiteUser, 
    nameSiteUser, 
    emailSiteUser, 
    facebookSiteUser,
    twitterSiteUser,
    linkedinSiteUser,
    profileUpdateFlag, 
    setHeadlineSiteUser, 
    setNameSiteUser, 
    setEmailSiteUser, 
    setProfileUpdateFlag,
    setFacebookSiteUser,
    setTwitterSiteUser,
    setLinkedinSiteUser
  } = useUserHook(null);
  const { doGetSiteUser, doResetSiteUser, doUpdateSiteUserProfile } = useUserStore();
  const { showLoader, showMessage, closeMessages, showError } = useLoader();
  if (!username) return null;

  useEffect(() => {
    doResetSiteUser();
  }, []);
  
  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | e27 - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for e27 - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Profile" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard
          siteUser={siteUser}
          headlineSiteUser={headlineSiteUser}
          nameSiteUser={nameSiteUser}
          emailSiteUser={emailSiteUser}
          profileUpdateFlag={profileUpdateFlag}
          facebookSiteUser={facebookSiteUser}
          twitterSiteUser={twitterSiteUser}
          linkedinSiteUser={linkedinSiteUser}
          setHeadlineSiteUser={setHeadlineSiteUser}
          setNameSiteUser={setNameSiteUser}
          setEmailSiteUser={setEmailSiteUser}
          doUpdateSiteUserProfile={doUpdateSiteUserProfile} 
          showLoader={showLoader}
          showMessage={showMessage}
          closeMessages={closeMessages}
          showError={showError}
          setProfileUpdateFlag={setProfileUpdateFlag}
          setFacebookSiteUser={setFacebookSiteUser}
          setTwitterSiteUser={setTwitterSiteUser}
          setLinkedinSiteUser={setLinkedinSiteUser}
          />
          <UserInfoCard
            username={username}
            siteUser={siteUser}
            nameSiteUser={nameSiteUser}
            emailSiteUser={emailSiteUser}
            headlineSiteUser={headlineSiteUser}
            doGetSiteUser={doGetSiteUser}
            setEmailSiteUser={setEmailSiteUser}
            setNameSiteUser={setNameSiteUser}
            setHeadlineSiteUser={setHeadlineSiteUser}
            doUpdateSiteUserProfile={doUpdateSiteUserProfile}
            showLoader={showLoader}
            showMessage={showMessage}
            closeMessages={closeMessages}
            showError={showError}
            setProfileUpdateFlag={setProfileUpdateFlag}
            profileUpdateFlag={profileUpdateFlag}
          />
          <UserAddressCard
          siteUser={siteUser} />
        </div>
      </div>
    </>
  );
}
