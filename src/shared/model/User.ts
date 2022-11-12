export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    isActive: boolean;
    permissions: string;
}

export interface IUserPagination {
    page: number;
    limit: number;
    firstName?: string;
}