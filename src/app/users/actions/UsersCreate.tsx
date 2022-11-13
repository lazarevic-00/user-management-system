import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {handleBack} from "../../../shared/functions/Functions";
import {UserAction} from "../components/UserAction";
import {UserHeader} from "../components/UserHeader";
import {useState} from "react";
import {initialUserState} from "../../../shared/initialStates/UserState";
import {UserService} from "../service";
import {ErrorToast} from "../../../shared/toasters/toasters";

export const UsersCreate = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(initialUserState);
    const handleCreateUser = (event: React.FormEvent) => {
        event.preventDefault();
        UserService.createUser(currentUser).then(response => {
            console.log(response)
        }).catch(error => ErrorToast(error))
    }
    return (
        <Container className="my-5">
            <UserHeader buttonName="Go back" title="User create" handleClick={() => handleBack(navigate, "/")}/>
            <div className="centered-content">
                <UserAction currentUser={currentUser} setCurrentUser={setCurrentUser} handleSubmit={handleCreateUser}/>
            </div>
        </Container>
    )
}