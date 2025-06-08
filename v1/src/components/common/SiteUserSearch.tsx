import Label from "../form/Label";
import Select from "../form/Select";
import Button from "../ui/button/Button";
import { DownloadIcon } from "../../icons";

interface SiteUserSearchProps {
  doGetSiteUsers: (filter: any) => Promise<any>;
  siteUserFilters: any;
  setSiteUserFilters: any;
  siteUsers: any;
  CSVLink: any;
  CSVDownload: any;
  convertToCSV: any;
}

const SiteUserSearch: React.FC<SiteUserSearchProps> = ({
  doGetSiteUsers,
  siteUserFilters,
  setSiteUserFilters,
  siteUsers,
  CSVLink,
  CSVDownload,
  convertToCSV
}) => {

  const isVerifiedOptions = [
    { value: null, label: "All" },
    { value: 1, label: "Approved" },
    { value: 0, label: "Not approved" }
  ];
  const isBannedOptions = [
    { value: null, label: "All" },
    { value: 1, label: "Banned" },
    { value: 0, label: "Not banned" }
  ];
  const isProOptions = [
    { value: null, label: "All" },
    { value: 1, label: "Pro" },
    { value: 0, label: "Not pro" }
  ];
  const handleApprovedMembersSelectChange = (e: any) => {
    if(e === 'All') {
      delete siteUserFilters.approved;
    } else {
      setSiteUserFilters({
        ...siteUserFilters,
        approved: e
      });
    }
  };
  const handleBannedMembersSelectChange = (e: any) => {
    if(e === 'All') {
      delete siteUserFilters.banned;
    } else {
      setSiteUserFilters({
        ...siteUserFilters,
        banned: e
      });
    }
  };
  const handleProMembersSelectChange = (e: any) => {
    if(e === 'All') {
      delete siteUserFilters.proexpirationdate;
    } else {
      setSiteUserFilters({
        ...siteUserFilters,
        proexpirationdate: e
      });
    }
  };

  const handleApplyFilter = () => {
    doGetSiteUsers(siteUserFilters)
  };
  
  const csvData = siteUsers.length > 0 ? convertToCSV(siteUsers) : [];

  return (
    <>
    <div className="space-y-6 columns-3 gap-6">
      <div>
        <Label>Approved Status</Label>
        <Select
          options={isVerifiedOptions}
          defaultValue="null"
          onChange={(e) => handleApprovedMembersSelectChange(e)}
          className="dark:bg-dark-900"
        />
      </div>
      <div>
        <Label>Account Status</Label>
        <Select
          options={isBannedOptions}
          defaultValue="null"
          placeholder="Select an option"
          onChange={(e) => handleBannedMembersSelectChange(e)}
          className="dark:bg-dark-900"
        />
      </div>
      <div>
        <Label>Subscription Plan</Label>
        <Select
          options={isProOptions}
          defaultValue="null"
          placeholder="Select an option"
          onChange={(e) => handleProMembersSelectChange(e)}
          className="dark:bg-dark-900"
        />
      </div>
    </div>
      <div className="flex items-center gap-3 px-2 mt-6 pb-4 justify-start">
        <Button 
        size="sm" 
        onClick={handleApplyFilter} 
        variant="primary"
        >
          Apply Filters
        </Button>
        <Button 
        size="sm" 
        onClick={handleApplyFilter}
        variant="outline">
          Clear Filters
        </Button>
        <Button 
        size="sm" 
        onClick={handleApplyFilter}
        variant="primary"
        startIcon={<DownloadIcon className="size-5" />}
        >
          <CSVLink data={csvData}>Download CSV</CSVLink>
        </Button>
      </div>

    </>
  );
};

export default SiteUserSearch;
