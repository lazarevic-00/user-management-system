import {Container} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {UsersList} from "./components/UsersList";
import {UserHeader} from "../components/UserHeader";

export const Users = () => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);

    return (
        <Container className="my-5">
            <UserHeader buttonName="Create user" title="Users list" handleClick={() => navigate("/user/create")}/>
            <div className="user-table">
                <UsersList/>
                {/*<EmptyState/>*/}
            </div>
        </Container>
    )
}