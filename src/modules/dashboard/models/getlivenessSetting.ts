export interface GetLivenessSettingResponse {
    status:  number;
    success: boolean;
    message: string;
    data:    Data;
}

export interface Data {
    thresh_hold:      number;
    action:           string;
    randomize_action: boolean;
    action_durations: ActionDuration[];
}

export interface ActionDuration {
    action_type_id: string;
    duration_secs:  number;
}
