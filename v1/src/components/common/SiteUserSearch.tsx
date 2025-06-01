import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";
import Button from "../ui/button/Button";

interface SiteUserSearchProps {
  doGetSiteUsers: (filter: any) => Promise<any>;
  siteUserFilters: any;
  setSiteUserFilters: any;
}

const SiteUserSearch: React.FC<SiteUserSearchProps> = ({
  doGetSiteUsers,
  siteUserFilters,
  setSiteUserFilters
}) => {
  const isVerifiedOptions = [
    { value: 1, label: "Approved" },
    { value: 0, label: "Not approved" }
  ];
  const isBannedOptions = [
    { value: 1, label: "Banned" },
    { value: 0, label: "Not banned" }
  ];
  const isProOptions = [
    { value: 1, label: "Pro" },
    { value: 0, label: "Not pro" }
  ];
  const handleApprovedMembersSelectChange = (e: any) => {
    setSiteUserFilters({
      ...siteUserFilters,
      approved: e
    });
  };
  const handleBannedMembersSelectChange = (e: any) => {
    setSiteUserFilters({
      ...siteUserFilters,
      banned: e
    });
  };
  const handleProMembersSelectChange = (e: any) => {
    setSiteUserFilters({
      ...siteUserFilters,
      proexpirationdate: e
    });
  };
  const handleApplyFilter = () => {
    doGetSiteUsers(siteUserFilters)
  };
  return (
    <>
    <div className="space-y-6 columns-3 gap-6">
      <div>
        <Label>Filter by approved members</Label>
        <Select
          options={isVerifiedOptions}
          placeholder="Select an option"
          onChange={(e) => handleApprovedMembersSelectChange(e)}
          className="dark:bg-dark-900"
        />
      </div>
      <div>
        <Label>Filter by banned members</Label>
        <Select
          options={isBannedOptions}
          placeholder="Select an option"
          onChange={(e) => handleBannedMembersSelectChange(e)}
          className="dark:bg-dark-900"
        />
      </div>
      <div>
        <Label>Filter by pro members</Label>
        <Select
          options={isProOptions}
          placeholder="Select an option"
          onChange={(e) => handleProMembersSelectChange(e)}
          className="dark:bg-dark-900"
        />
      </div>
    </div>
      <div className="flex items-center gap-3 px-2 mt-6 justify-start">
        <Button size="sm" onClick={handleApplyFilter}>
          Apply Filter
        </Button>
      </div>

    </>
  );
};

export default SiteUserSearch;
