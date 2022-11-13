import {DynamicForm} from "../../../shared/components/DynamicForm";
import {userCreateForm, userUpdateForm} from "../../../utils/forms/FormFields";
import {IUser} from "../../../shared/model/User";
import {SetStateAction} from "react";

interface IUserActionsFieldsProps {
    currentUser: IUser;
    setCurrentUser?: React.Dispatch<SetStateAction<IUser>>;
    isEditForm?: boolean;
}

export const UserActionFields = ({currentUser, isEditForm = false, setCurrentUser}: IUserActionsFieldsProps) => {

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, checked} = event.target;
        const isCheckbox = name === "isActive";
        setCurrentUser && setCurrentUser(prev => ({...prev, [name]: isCheckbox ? checked : value}))
    }

    return <DynamicForm initialValue={currentUser} changeHandler={changeHandler}
                        inputArrays={isEditForm ? userUpdateForm : userCreateForm}/>
}