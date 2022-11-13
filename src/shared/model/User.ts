export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    isActive: boolean;
    permission: any;
}

export interface IUserPagination {
    page: number;
    limit: number;
    firstName?: string;
}