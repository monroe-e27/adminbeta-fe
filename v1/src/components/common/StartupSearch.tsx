import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";
import Button from "../ui/button/Button";

interface StartupSearchProps {
  doGetStartups: (filter: any) => Promise<any>;
  startupFilters: any;
  setStartupFilters: any;
}

const StartupSearch: React.FC<StartupSearchProps> = ({
  doGetStartups,
  startupFilters,
  setStartupFilters
}) => {

  const statusOptions = [
    { value: 'draft', label: "Draft" },
    { value: 'hidden', label: "Hidden" }
  ];

  const isApprovedOptions = [
    { value: 1, label: "Approved" },
    { value: 0, label: "Not approved" }
  ];

  const handleStatusChange = (e: any) => {
    setStartupFilters({
      ...startupFilters,
      status: e
    });
  };

  const handleApprovedChange = (e: any) => {
    setStartupFilters({
      ...startupFilters,
      approved: e
    });
  };

  const handleApplyFilter = () => {
    doGetStartups(startupFilters);
  };

  return (
    <>
    <div className="space-y-6 columns-3 gap-6">
      <div>
        <Label>Filter by Status</Label>
        <Select
          options={statusOptions}
          placeholder="Select an option"
          className="dark:bg-dark-900"
          onChange={(e) => handleStatusChange(e)}
        />
      </div>
      <div>
        <Label>Filter by Approval</Label>
        <Select
          options={isApprovedOptions}
          placeholder="Select an option"
          className="dark:bg-dark-900"
          onChange={(e) => handleApprovedChange(e)}
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

export default StartupSearch;
