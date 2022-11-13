import {DynamicForm} from "../../../shared/components/DynamicForm";
import {userCreateForm, userUpdateForm} from "../../../utils/forms/FormFields";
import {IUser} from "../../../shared/model/User";
import {SetStateAction, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {IAllStates} from "../../../store/rootReducer";
import {getAdjustedEnums} from "../../../shared/functions/Functions";
import {IFormField} from "../../../shared/model/Form";

export interface IUserActionsFieldsProps {
    currentUser: IUser;
    setCurrentUser?: React.Dispatch<SetStateAction<IUser>>;
    isEditForm?: boolean;
}

export const UserActionFields = ({currentUser, isEditForm = false, setCurrentUser}: IUserActionsFieldsProps) => {
    const enums = useSelector((state: IAllStates) => state.enums);
    const [fields, setFields] = useState<IFormField[]>([]);
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, checked} = event.target;
        const isCheckbox = name === "isActive";
        setCurrentUser && setCurrentUser(prev => ({...prev, [name]: isCheckbox ? checked : value}))
    }
    useEffect(() => {
        if (!!enums?.length) {
            if (isEditForm) {
                setFields(userUpdateForm);
            } else {
                const adjustPermissionValues = userCreateForm.map((item) => {
                    if (item.input.name === "permission") {
                        item.input.options = getAdjustedEnums(enums);
                    }
                    return item;
                })
                setFields(adjustPermissionValues);
            }
        }
    }, [enums, isEditForm])
    return <DynamicForm initialValue={currentUser} changeHandler={changeHandler}
                        inputArrays={fields}/>
}
