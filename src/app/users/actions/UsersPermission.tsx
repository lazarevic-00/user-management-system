import {Container} from "react-bootstrap";
import {UserHeader} from "../components/UserHeader";
import {handleBack} from "../../../shared/functions/Functions";
import {useNavigate} from "react-router-dom";
import {UserAction} from "../components/UserAction";
import {useState} from "react";
import {IUser} from "../../../shared/model/User";
import {initialUserState} from "../../../shared/initialStates/UserState";

export const UsersPermission = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<IUser>(initialUserState);
    const handleUpdatePermission = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('clicked')
    }
    return (
        <Container className="my-5">
            <UserHeader buttonName="Go back" title="User update permission"
                        handleClick={() => handleBack(navigate, "/")}/>
            <div className="centered-content">
                <UserAction handleSubmit={handleUpdatePermission} isEditPermission/>
            </div>
        </Container>
    )
}