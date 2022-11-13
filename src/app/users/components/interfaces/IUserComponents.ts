import {IUser} from "../../../../shared/model/User";
import {SetStateAction} from "react";

export interface IUserActionProps {
    handleSubmit: (event: React.FormEvent) => void;
    isEditForm?: boolean;
    isEditPermission?: boolean;
    currentUser?: IUser
    setCurrentUser?: React.Dispatch<SetStateAction<IUser>>
}

export interface IUserHeaderProps {
    handleClick: () => void;
    title: string;
    buttonName: string;
}
