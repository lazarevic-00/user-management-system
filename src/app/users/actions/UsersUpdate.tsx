import {Container} from "react-bootstrap";
import {UserHeader} from "../components/UserHeader";
import {handleBack} from "../../../shared/functions/Functions";
import {UserAction} from "../components/UserAction";
import {useNavigate, useParams} from "react-router-dom";
import {SetStateAction, useEffect, useState} from "react";
import {IUser} from "../../../shared/model/User";
import {UserService} from "../service";
import {ErrorToast, SuccessToast} from "../../../shared/toasters/toasters";
import {LoadingSpinner} from "../../../shared/components/LoadingSpinner";


export const UsersUpdate = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState<IUser>();

    const handleUpdateUser = (event: React.FormEvent) => {
        event.preventDefault();
        UserService.updateUser(currentUser as IUser, id as string).then(response => {
            if (response) {
                SuccessToast(`You have successfully updated user ID: ${id}`)
                handleBack(navigate, "/");
            }
        }).catch(error => ErrorToast(error))
    }

    useEffect(() => {
        setIsLoading(true)
        if (!!id?.length) {
            UserService.getUser(id).then(response => {
                setCurrentUser(response)
            }).catch(error => ErrorToast(error)).finally(() => setIsLoading(false));
        }
    }, [id])

    return (
        <Container className="my-5">
            <UserHeader buttonName="Go back" title="User update" handleClick={() => handleBack(navigate, "/")}/>
            <div className="centered-content">
                {!isLoading ?
                    <UserAction currentUser={currentUser}
                                setCurrentUser={setCurrentUser as React.Dispatch<SetStateAction<IUser>>}
                                isEditForm={true}
                                handleSubmit={handleUpdateUser}/> :
                    <LoadingSpinner/>}
            </div>
        </Container>
    )
}