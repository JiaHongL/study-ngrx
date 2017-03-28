export interface AppState {
    todos?: Array<Items>;
    status?: string;
}

export interface Items {
    "id": number;
    "completed": boolean;
    "text": string
};