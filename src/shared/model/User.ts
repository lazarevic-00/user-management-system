export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    userName: string;
    isActive: boolean;
    permission: string;
}

export interface IUserPagination {
    page: number;
    limit: number;
    isActive?: string;
    order?: string;
    permission?: string;
    email?: string;
}