import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {handleBack} from "../../../shared/functions/Functions";
import {UserAction} from "../components/UserAction";
import {UserHeader} from "../components/UserHeader";

export const UsersCreate = () => {
    const navigate = useNavigate();
    const handleCreateUser = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Submitted')
    }
    return (
        <Container className="my-5">
            <UserHeader buttonName="Go back" title="User create" handleClick={() => handleBack(navigate, "/")}/>
            <UserAction handleSubmit={handleCreateUser}/>
        </Container>
    )
}