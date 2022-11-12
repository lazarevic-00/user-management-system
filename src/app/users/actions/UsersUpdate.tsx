import {Container} from "react-bootstrap";
import {UserHeader} from "../components/UserHeader";
import {handleBack} from "../../../shared/functions/Functions";
import {UserAction} from "../components/UserAction";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {IUser} from "../../../shared/model/User";
import {USERS_LIST} from "../../../dummy/dummy";
import {useDispatch, useSelector} from "react-redux";
import userSlice from "../../../store/user/userSlice";
import {IAllStates} from "../../../store/rootReducer";


export const UsersUpdate = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUpdateUser = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Submitted')
    }
    useEffect(() => {
        if (!!id?.length) {
            const filteredUser = USERS_LIST.find(user => user.id === id) as IUser;
            dispatch(userSlice.actions.setUser(filteredUser));
        }
    }, [id])

    return (
        <Container className="my-5">
            <UserHeader buttonName="Go back" title="User update" handleClick={() => handleBack(navigate, "/")}/>
            <div className="centered-content">
                <UserAction handleSubmit={handleUpdateUser}/>
            </div>
        </Container>
    )
}