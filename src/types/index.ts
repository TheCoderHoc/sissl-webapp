export interface ISVG extends React.ComponentProps<"svg"> {
    variant?: string;
}

export interface IPaginatedResponse<T> {
    status: boolean;
    message: string;
    data: {
        paginator: IPagination;
        results: T[];
    };
}

export interface IResponse<T> {
    status: boolean;
    message: string;
    data: T;
}

interface IPagination {
    count: number;
    page: number;
    page_size: number;
    total_pages: number;
    next: string | null;
    next_page_number: string | null;
    previous: string | null;
    previous_page_number: string | null;
}
