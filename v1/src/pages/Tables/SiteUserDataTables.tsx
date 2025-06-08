import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import SiteUserSearch from "../../components/common/SiteUserSearch";
import PageMeta from "../../components/common/PageMeta";
import DataTableSiteUsers from "../../components/tables/DataTables/DataTableSiteUsers";
import { CSVLink, CSVDownload } from "react-csv";
import { convertToCSV } from "../../utils/utilityFunctions";
// import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";
import { useUserStore } from "../../store/userStore";
import { useUserHook } from "../../hooks/useUser";
import { useRedirect } from "../../hooks/useRedirect";
import { useEffect } from "react";

export default function SiteUserDataTables() {
  const { doGetSiteUsers, doResetSiteUsers } = useUserStore();
  const { siteUsers, siteUserFilters, setSiteUserFilters } = useUserHook(null);
  const { handleRedirect } = useRedirect();

  useEffect(() => {
    doResetSiteUsers(); // Reload each user state for any changes
  }, []);
  
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | E27 - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for E27 - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Site Users" />
      <div className="space-y-6">
        <ComponentCard title="Site Users List">
          <SiteUserSearch
            doGetSiteUsers={doGetSiteUsers}
            siteUserFilters={siteUserFilters}
            setSiteUserFilters={setSiteUserFilters}
            siteUsers={siteUsers}
            CSVLink={CSVLink}
            CSVDownload={CSVDownload}
            convertToCSV={convertToCSV}
          />
          <DataTableSiteUsers
            siteUsers={siteUsers}
            doGetSiteUsers={doGetSiteUsers}
            handleRedirect={handleRedirect}
          />
          {/* <BasicTableOne/> */}
        </ComponentCard>
      </div>
    </>
  );
}
