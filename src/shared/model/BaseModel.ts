export interface BaseModel<Type> {
    items: Type;
    meta: IBaseMeta;
}

interface IBaseMeta {
    totalItems: number,
    itemsPerPage: number
}