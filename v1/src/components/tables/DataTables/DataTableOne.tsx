import { useState, useEffect } from "react";
import { JSX } from 'react';
import DataTable from 'react-data-table-component';
import { btoaUri } from "../../../utils/utilityFunctions.js";
import { allUsers } from "../../../constants/status.ts";
import { siteUserUpdateBannedStatus, siteUserUpdateAdminStatus } from "../../../api/index.ts";

interface UserRow {
    name: string;
    username: string;
    email: string;
    banned: number;
    admin: number;
}

interface DataTableColumn {
    name: string;
    selector: (row: UserRow) => any;
    cell: (row: UserRow) => JSX.Element;
    sortable: boolean;
}

const handleBannedStatusChange = (row: UserRow, newStatus: number) => {
    siteUserUpdateBannedStatus(
        {
            where: { username: row.username },
            params: { banned: newStatus }
        }
    );
};

const handleAdminStatusChange = (row: UserRow, newStatus: number) => {
    siteUserUpdateAdminStatus(
        {
            where: { username: row.username },
            params: { admin: newStatus }
        }
    );
};

const columns: DataTableColumn[] = [
    {
        name: 'Name',
        selector: (row: UserRow) => row.name,
        cell: (row: UserRow) =>
            <div className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-3">
                    <div>
                        <span className="block font-medium text-gray-500 text-theme-lg dark:text-white/90">
                            {row.name}
                        </span>
                    </div>
                </div>
            </div>,
        sortable: true,
    },
    {
        name: 'Username',
        selector: (row: UserRow) => row.username,
        cell: (row: UserRow) =>
            <div className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-3">
                    <div>
                        <span className="block font-medium text-gray-500 text-theme-sm dark:text-white/90">
                            {row.username}
                        </span>
                    </div>
                </div>
            </div>,
        sortable: true,
    },
    {
        name: 'Email',
        selector: (row: UserRow) => row.email,
        cell: (row: UserRow) =>
            <div className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-3">
                    <div>
                        <span className="block text-blue-500 text-theme-sm dark:text-blue/90">
                            {row.email}
                        </span>
                    </div>
                </div>
            </div>,
        sortable: true,
    },
    {
        name: 'Admin',
        selector: (row: UserRow) => row.admin,
        cell: (row: UserRow) => <div className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
            <label className="inline-flex items-center cursor-pointer">
                <input 
                    type="checkbox" 
                    value="" 
                    className="sr-only peer" 
                    defaultChecked={row.admin === 1 ? true : false}
                    onChange={(e) => {
                        const newStatus = e.target.checked ? 1 : 0;
                        handleAdminStatusChange(row, newStatus);
                    }}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                <span className={`ms-3 text-sm font-light ${row.admin == 1 ? "text-blue-900 dark:text-gray-300" : "text-gray-900 dark:text-gray-300"}`}>
                    {row.admin == 1 ? "Admin" : "Not Admin"}
                </span>
            </label>
        </div>,
        sortable: true,
    },
const DataTableOne = ({
    siteUsers,
    doGetSiteUsers,
    handleRedirect,
}: {
    siteUsers: UserRow[],
    doGetSiteUsers: () => void,
    handleRedirect: (username: string) => void,
}) => {
    return (
        <DataTable
            columns={columns}
            data={siteUsers}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            paginationComponentOptions={{
                rowsPerPageText: 'Rows per page:',
                rangeSeparatorText: 'of',
            }}
            customStyles={customStyles}
            onRowClicked={(row) => handleRedirect(row.username)}
        />
    );
};

export default DataTableOne;
        selector: row => row.name,
        cell: row =>
            <div className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-3">
                    <div>
                        <span className="block font-medium text-gray-500 text-theme-lg dark:text-white/90">
                            {row.name}
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
        name: 'Username',
        selector: row => row.username,
        cell: row =>
            <div className="px-5 py-4 sm:px-6 text-start">
                <div className="flex items-center gap-3">
                    <div>
                        <span className="block font-medium text-gray-500 text-theme-sm dark:text-white/90">
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
                        <span className="block text-blue-500 text-theme-sm dark:text-blue/90">
                            {row.email}
                        </span>
                        {/* <span className="block text-blue-400 text-theme-xs dark:text-blue-90">
                            {row.email}
                        </span> */}
                    </div>
                </div>
            </div>,
        cell: row => <div className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
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
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
                <span className={`ms-3 text-sm font-light ${row.banned == 0 ? "text-green-900 dark:text-gray-300" : "text-red-900 dark:text-gray-300"}`}>
                    {row.banned == 0 ? "Active" : "Inactive"}
                </span>
            </label>
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