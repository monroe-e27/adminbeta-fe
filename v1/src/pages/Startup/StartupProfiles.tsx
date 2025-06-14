import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import StartupMetaCard from "../../components/StartupProfile/StartupMetaCard";
import StartupInfoCard from "../../components/StartupProfile/StartupInfoCard";
import PageMeta from "../../components/common/PageMeta";
import { useParams } from "react-router-dom";
import { useStartupStore } from "../../store/startupStore";
import { useUserHook } from "../../hooks/useUser";
import { useEffect } from "react";
import useLoader from "../../hooks/useLoader";

export default function UserProfiles() {
  const { startupName } = useParams();
  if (!startupName) return null;
  
  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | e27 - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for e27 - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Startup Profile" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Startup Profile
        </h3>
        <div className="space-y-6">
          <StartupMetaCard/>
          <StartupInfoCard/>
        </div>
      </div>
    </>
  );
}
