export interface GetAPIKeyResponseWithID {
    status:  number;
    success: boolean;
    message: string;
    data:    Data;
}
export interface GetAPIKeyListResponse {
    status:  number;
    success: boolean;
    message: string;
    data:    string;
}

export interface Data {
    id:             string;
    name:           string;
    description:    string;
    scopes_display: string;
    environment:    string;
    plaintext:      string;
    is_active:      boolean;
    revoked_at:     Date;
    expires_at:     Date;
    last_used_at:   Date;
    date_created:   Date;
}

export interface APIKeyRequest{
    name:        string;
    description: string;
    scopes:      string[];
}
export interface APIKeyReponse {
    status:  number;
    success: boolean;
    message: string;
    data:    Data;
}


