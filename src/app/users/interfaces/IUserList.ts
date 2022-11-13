import {SetStateAction} from "react";
import {IUser, IUserPagination} from "../../../shared/model/User";

export interface IGetAllUsersProps {
    setIsLoading: React.Dispatch<SetStateAction<boolean>>;
    setState: React.Dispatch<SetStateAction<IUser[]>>;
    setTotalPages: React.Dispatch<SetStateAction<number>>;
    pagination: IUserPagination
}