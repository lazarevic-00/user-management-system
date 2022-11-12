import {useSelector} from "react-redux";
import {IAllStates} from "../../../store/rootReducer";
import {DynamicForm} from "../../../shared/components/DynamicForm";
import {userActionForm} from "../../../utils/forms/FormFields";

export const UserActionFields = () => {
    const currentUser = useSelector(
        (state: IAllStates) => state.user
    );
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        console.log(name, value)
    }
    // console.log(currentUser)
    return <DynamicForm initialValue={currentUser} changeHandler={changeHandler} inputArrays={userActionForm}/>
}