export interface IApiResponse<T> {
    statusCode?: number;
    success?: boolean;
    message: string;
    data: T;
}

export interface GetApiResponse {
    id: string;
    title: string;
    type: string;
    key: string;
    source?: string;
}

export interface WebhookResponse {
    id: string;
    name: string;
    events: string[];
    url: string;
}
