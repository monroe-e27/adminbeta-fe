import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import Badge from "../../ui/badge/Badge";
import { btoaUri } from "../../../utils/utilityFunctions.js";
import { allUsers } from "../../../constants/status.ts";
import { siteUserUpdateBannedStatus } from "../../../api/index.ts";

const handleBannedStatusChange = (row: any, newStatus: number) => {
    siteUserUpdateBannedStatus(
        {
            where: { username: row.username },
            params: { banned: newStatus }
        }
    );
  
}

const columns = [
    {
        name: 'Username',
        selector: row => row.username,
        cell: row =>
            <div className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-3">
                    {/* <div className="w-10 h-10 overflow-hidden rounded-full"><img src="/images/user/user-31.jpg" alt="img" style={{ width: 50, height: 50 }} /></div> */}
                    <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {row.username}
                        </span>
                        {/* <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                            e27 Developer
                        </span> */}
                    </div>
                </div>
            </div>,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        cell: row =>
            <div className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-3">
                    <div>
                        <span className="block text-blue-400 text-theme-sm dark:text-blue/90">
                            {row.email}
                        </span>
                        {/* <span className="block text-blue-400 text-theme-xs dark:text-blue-90">
                            {row.email}
                        </span> */}
                    </div>
                </div>
            </div>,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        cell: row =>
            <div className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                {row.name}
            </div>,
        sortable: true,
    },
    {
        name: 'Banned',
        selector: row => row.banned,
        cell: row => <div className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
            {/* <Badge
                size="sm"
                color={
                    row.banned === 0
                        ? "success"
                        : row.banned === 1
                            ? "warning"
                            : "error"
                }
            >
                {row.banned == 0 ? "Active" : "Inactive"}
            </Badge> */}
            <label className="inline-flex items-center cursor-pointer">
                <input 
                    type="checkbox" 
                    value="" 
                    className="sr-only peer" 
                    defaultChecked={row.banned === 0 ? false : true}
                    onChange={(e) => {
                        const newStatus = e.target.checked ? 1 : 0;
                        handleBannedStatusChange(row, newStatus);
                    }}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
                <span className={`ms-3 text-sm font-light ${row.banned == 0 ? "text-green-900 dark:text-gray-300" : "text-red-900 dark:text-gray-300"}`}></span>
            </label>
            {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{row.banned == 0 ? "Active" : "Inactive"}</span> */}
        </div>,
        sortable: true,
    },
];

export default function DataTableOne(
    {
        siteUsers,
        doGetSiteUsers,
        handleRedirect,
        userEmail,
    }: {
        siteUsers: any,
        doGetSiteUsers: any,
        handleRedirect: any,
        userEmail: any,
    }) {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        doGetSiteUsers(allUsers);
    }, []);

    const filteredData = siteUsers.filter(item =>
        Object.values(item).some(val =>
            val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleRowClick = (row: any) => {
        handleRedirect(`/profile/${btoaUri(row.username)}`);
    }

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