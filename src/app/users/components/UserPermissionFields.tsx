import {Col} from "react-bootstrap";
import {DynamicForm} from "../../../shared/components/DynamicForm";
import {userPermissionForm} from "../../../utils/forms/FormFields";
import {useSelector} from "react-redux";
import {IAllStates} from "../../../store/rootReducer";
import {useEffect} from "react";
import {IUserActionsFieldsProps} from "./UserActionFields";
import {getAdjustedEnums} from "../../../shared/functions/Functions";


export const UserPermissionFields = ({currentUser, setCurrentUser}: IUserActionsFieldsProps) => {
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setCurrentUser && setCurrentUser(prev => ({...prev, [name]: value}))
    }
    const enums = useSelector((state: IAllStates) => state.enums);
    useEffect(() => {
        !!enums?.length && userPermissionForm.forEach((item) => {
            item.input.options = getAdjustedEnums(enums);
        })
    }, [enums])
    return (
        <Col sm={12} className="mb-3">
            <DynamicForm initialValue={currentUser} changeHandler={changeHandler}
                         inputArrays={userPermissionForm}/>
        </Col>
    )
}