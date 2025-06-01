declare module 'react-data-table-component-extensions' {
    import { ComponentType } from 'react';
    import { TableProps } from 'react-data-table-component';

    interface DataTableExtensionsProps extends TableProps<any> {
        columns: any[];
        data: any[];
    }

    const DataTableExtensions: ComponentType<DataTableExtensionsProps>;
    export default DataTableExtensions;
} 