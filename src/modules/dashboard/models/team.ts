export interface GetTeam {
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
    user:        Creator;
    creator:     Creator;
    status:      string;
    invite_type: string;
    date:        Date;
}

export interface Creator {
    id:           string;
    first_name:   string;
    last_name:    string;
    email:        string;
    role:         string;
    account_type: string;
    company_name: string;
    company:      Company;
    profile:      Profile;
}

export interface Company {
    name:                  string;
    reg_number:            string;
    date_of_establishment: Date;
    company_address:       string;
    proof_of_address:      string;
    cac_document:          string;
}

export interface Profile {
    phone_number:    string;
    profile_picture: string;
    nin:             string;
    street:          string;
    country:         string;
    state:           string;
}

export interface CreateTeamRequest {
    first_name:   string;
    last_name:    string;
    email:        string;
    phone_number: string;
    role:         string;
    invite_type:  string;
}

export interface CreateTeamResponse {
    status:  number;
    success: boolean;
    message: string;
    data:    Data;
}

export interface Data {
    id:          string;
    user:        Creator;
    creator:     Creator;
    status:      string;
    invite_type: string;
    date:        Date;
}

export interface Creator {
    id:           string;
    first_name:   string;
    last_name:    string;
    email:        string;
    role:         string;
    account_type: string;
    company_name: string;
    company:      Company;
    profile:      Profile;
}

export interface Company {
    name:                  string;
    reg_number:            string;
    date_of_establishment: Date;
    company_address:       string;
    proof_of_address:      string;
    cac_document:          string;
}

export interface Profile {
    phone_number:    string;
    profile_picture: string;
    nin:             string;
    street:          string;
    country:         string;
    state:           string;
}
