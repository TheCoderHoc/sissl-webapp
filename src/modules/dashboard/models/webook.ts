export interface GetWebHookResponse {
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
    id:      string;
    name:    string;
    events:  string[];
    url:     string;
    api_key: APIKey;
}

export interface APIKey {
    id:               string;
    name:             string;
    description:      string;
    environment:      string;
    key:              string;
    status:           string;
    last_used:        Date;
    service_count:    number;
    created_datetime: Date;
}
