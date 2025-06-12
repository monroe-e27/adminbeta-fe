import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { btoaUri } from "../../../utils/utilityFunctions.js";
import Badge from "../../ui/badge/Badge";

interface Startup {
    id: number;
    name: string;
    slug: string;
    status: string;
    approved: string;
    created_at: string;
}

interface DataTableStartupsProps {
    startups: Startup[];
    doGetStartups: (filter: any) => Promise<any>;
    handleRedirect?: (path: string) => void;
}

const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const handleApplyFilter = () => {
  };


const columns = [
    {
        name: 'Company Name',
        selector: (row: Startup) => row.name,
        cell: (row: Startup) =>
            <div className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-3">
                    <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {row.name}
                        </span>
                    </div>
                </div>
            </div>,
        sortable: true,
    },
    {
        name: 'Url',
        selector: (row: Startup) => row.slug,
        cell: (row: Startup) =>
            <div className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                {row.slug}
            </div>,
        sortable: true,
    },
    {
        name: 'Status',
        selector: (row: Startup) => row.status,
        cell: (row: Startup) =>
            <div className="px-4 py-3">
                <Badge
                    size="sm"
                    color={row.status == "draft" ? "success" : "warning"}
                >
                    {capitalizeFirstLetter(row.status)}
                </Badge>
            </div>,
        sortable: true,
    },
    {
        name: 'Approval Status',
        selector: (row: Startup) => row.approved,
        cell: (row: Startup) =>
            <div className="px-4 py-3">
                <Badge
                    size="sm"
                    color={row.approved == "1" ? "success" : "warning"}
                >
                    {row.approved == "1" ? "Approved" : "Not approved"}
                </Badge>
            </div>,
        sortable: true,
    },
];

export default function DataTableStartups({ startups, doGetStartups, handleRedirect }: DataTableStartupsProps) {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        doGetStartups({});
    }, []);

    const filteredData = startups.filter((item: Startup) =>
        Object.values(item).some(val =>
            val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleRowClick = (row: Startup) => {
        if (handleRedirect) {
            handleRedirect(`/startup-profile/${btoaUri(row.name)}`);
        }
    };

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Quick search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <DataTable
                columns={columns}
                data={filteredData}
                selectableRows
                pagination
                highlightOnHover
                pointerOnHover
                onRowClicked={handleRowClick}
            />
        </div>
    );
}