import {Container} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {UsersListTable} from "../components/UsersListTable";
import {UserHeader} from "../components/UserHeader";
import {ConfirmDelete} from "../../../shared/components/ConfirmDeleteModal";

export const UsersList = () => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const deleteHandler = (userId: number) => {
        console.log('ID', userId)
    }

    const handleShowDeleteModal = () => setShowDeleteModal(true);
    return (
        <Container className="my-5">
            <UserHeader buttonName="Create user" title="Users list" handleClick={() => navigate("/user/create")}/>
            <div className="centered-content">
                <div className="card w-100">
                    <div className="card-body">
                        <UsersListTable handleShowDeleteModal={handleShowDeleteModal}/>
                    </div>
                </div>
                <ConfirmDelete show={showDeleteModal} setShow={setShowDeleteModal}
                               deleteHandler={() => deleteHandler(1)}/>
                {/*<EmptyState/>*/}
            </div>
        </Container>
    )
}