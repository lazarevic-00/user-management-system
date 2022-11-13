import {Col} from "react-bootstrap";
import {DynamicForm} from "../../../shared/components/DynamicForm";
import {userPermissionForm} from "../../../utils/forms/FormFields";

export const UserPermissionFields = () => {
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {checked, value, name} = event.target;
        console.log("value", checked, "name", name)
    }
    return (
        <Col sm={12} className="mb-3">
            <DynamicForm changeHandler={changeHandler} inputArrays={userPermissionForm}/>
        </Col>
    )
}