export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    status: boolean;
    permissions: string;
}

export interface IUserPagination {
    page: number;
    perPage: number;
    firstName?: string;
}