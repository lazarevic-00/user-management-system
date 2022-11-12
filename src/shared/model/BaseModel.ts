export interface BaseModel<Type> {
    items: Type;
    meta: {
        totalItems: number;
        itemsPerPage: number;
    }
}