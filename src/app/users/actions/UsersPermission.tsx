import {Container} from "react-bootstrap";
import {UserHeader} from "../components/UserHeader";
import {handleBack} from "../../../shared/functions/Functions";
import {useNavigate, useParams} from "react-router-dom";
import {UserAction} from "../components/UserAction";
import {SetStateAction, useEffect, useState} from "react";
import {IUser} from "../../../shared/model/User";
import {initialUserState} from "../../../shared/initialStates/UserState";
import {UserService} from "../service";
import {ErrorToast, SuccessToast} from "../../../shared/toasters/toasters";

export const UsersPermission = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<IUser>(initialUserState);

    const handleUpdatePermission = (event: React.FormEvent) => {
        event.preventDefault();
        UserService.updatePermission(currentUser?.permission, id as string).then(response => {
            if (response) {
                handleBack(navigate, "/");
                SuccessToast(`You have successfully updated permission for user ${currentUser?.firstName} ${currentUser?.lastName}`)
            }
        }).catch(error => ErrorToast(error));
    }

    useEffect(() => {
        !!id?.length && UserService.getUser(id as string).then(response => {
            setCurrentUser(response)
        }).catch(error => ErrorToast(error))
    }, [id])


    return (
        <Container className="my-5">
            <UserHeader buttonName="Go back" title="User update permission"
                        handleClick={() => handleBack(navigate, "/")}/>
            <div className="centered-content">
                <UserAction currentUser={currentUser}
                            setCurrentUser={setCurrentUser as React.Dispatch<SetStateAction<IUser>>}
                            handleSubmit={handleUpdatePermission} isEditPermission/>
            </div>
        </Container>
    )
}