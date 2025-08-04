export interface IBillingPlanResponseData {
    id: string;
    name: string;
    title: string;
    description: string;
    price: string;
    currency: string;
    cta_label: string;
    features: string[];
    created_at: string;
    updated_at: string;
}

export interface IPaymentInitiationResponseData {
    authorization_url: string;
    access_code: string;
    reference: string;
}

export interface IWalletBalanceResponseData {
    balance: string;
    total_transactions: string;
}

export interface ITransactionResponseData {
    id: string;
    reference: string;
    status: string;
    amount: string;
    type: string;
    date: string;
}
