import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import DataTableStartups from "../../components/tables/DataTables/DataTableStartups";
import StartupSearch from "../../components/common/StartupSearch";
import { useStartupStore } from "../../store/startupStore";
import { useStartupHook } from "../../hooks/useStartup";
import { useRedirect } from "../../hooks/useRedirect";
import { useEffect } from "react";


export default function StartupDataTables() {
  const { startups, doGetStartups } = useStartupStore();
  const { startupFilters, setStartupFilters } = useStartupHook();
  const { handleRedirect } = useRedirect();

  useEffect(() => {
    doGetStartups({});
  }, []);

  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | E27 - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for E27 - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Startups" />
      <div className="space-y-6">
        <ComponentCard title="Startup List">
          <StartupSearch
          startupFilters={startupFilters}
          setStartupFilters={setStartupFilters}
          doGetStartups={doGetStartups}
          />
          <DataTableStartups
          startups={startups}
          doGetStartups={doGetStartups}
          handleRedirect={handleRedirect}
          />
        </ComponentCard>
      </div>
    </>
  );
}
