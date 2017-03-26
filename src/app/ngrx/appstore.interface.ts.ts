export interface AppState {
    todos?: Array<ItemState>;
    status?: string;
}

export interface ItemState {
    "id": number;
    "completed": boolean;
    "text": string
};