export interface GetServicesResponse {
    status:  boolean;
    message: string;
    data:    Data;
}

export interface Data {
    paginator: Paginator;
    results:   Result[];
}

export interface Paginator {
    count:                number;
    page:                 number;
    page_size:            number;
    total_pages:          number;
    next_page_number:     number;
    next:                 string;
    previous:             string;
    previous_page_number: number;
}

export interface Result {
    id:          string;
    name:        string;
    description: string;
    services?:   Result[];
    cost_price?: string;
}
