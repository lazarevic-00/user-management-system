import {Container} from "react-bootstrap";
import {UserHeader} from "../components/UserHeader";
import {handleBack} from "../../../shared/functions/Functions";
import {UserAction} from "../components/UserAction";
import {useNavigate} from "react-router-dom";

export const UsersUpdate = () => {
    const navigate = useNavigate();
    const handleUpdateUser = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Submitted')
    }


    return (
        <Container className="my-5">
            <UserHeader buttonName="Go back" title="User update" handleClick={() => handleBack(navigate, "/")}/>
            <UserAction handleSubmit={handleUpdateUser}/>
        </Container>
    )
}