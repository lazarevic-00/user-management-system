import {Container} from "react-bootstrap";
import {UserHeader} from "../components/UserHeader";
import {handleBack} from "../../../shared/functions/Functions";
import {useNavigate} from "react-router-dom";

export const UsersPermission = () => {
    const navigate = useNavigate();
    return (
        <Container className="my-5">
            <UserHeader buttonName="Go back" title="User update permission"
                        handleClick={() => handleBack(navigate, "/")}/>
        </Container>
    )
}