declare module 'react-csv' {
    import { ComponentType } from 'react';

    interface CSVProps {
        data: any[];
        headers?: any[];
        filename?: string;
        className?: string;
    }

    export const CSVLink: ComponentType<CSVProps>;
    export const CSVDownload: ComponentType<CSVProps>;
} 