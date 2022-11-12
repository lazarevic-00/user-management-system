export interface BaseModel<Type> {
    count: number;
    data: Type;
    page: number;
    perPage: number;
}