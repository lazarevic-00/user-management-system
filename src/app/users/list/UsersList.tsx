import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UsersListTable} from "../components/UsersListTable";
import {UserHeader} from "../components/UserHeader";
import {ConfirmDelete} from "../../../shared/components/ConfirmDeleteModal";
import {SuccessToast} from "../../../shared/toasters/toasters";
import {USERS_LIST} from "../../../dummy/dummy";
import {IUser} from "../../../shared/model/User";
import {EmptyState} from "../../../shared/emptyState/EmptyState";

export const UsersList = () => {
    const navigate = useNavigate();
    // const [pagination, setPagination] = useState({
    //     page: 1,
    //     perPage: 10
    // })
    const [selectedUser, setSelectedUser] = useState<IUser>()
    const [userList, setUserList] = useState<IUser[]>([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleShowDeleteModal = (userId: string) => {
        const filteredUser = userList?.find(user => user?.id === userId);
        setSelectedUser(filteredUser);
        setShowDeleteModal(true)
    };

    const deleteHandler = (userId: string) => {
        const filterDeletedUser = userList?.filter(user => user?.id !== userId);
        SuccessToast(`You have successfully deleted user ${selectedUser?.firstName} ${selectedUser?.lastName}`)
        setUserList(filterDeletedUser);
    }

    useEffect(() => {
        // UserService.getAllUsers(pagination).then(response => {
        //     console.log(response)
        setUserList(USERS_LIST);
        // }).catch(error => ErrorToast(error));
    }, [])
    return (
        <Container className="my-5">
            <UserHeader buttonName="Create user" title="Users list" handleClick={() => navigate("/user/create")}/>
            <div className="centered-content">
                <div className="card w-100">
                    <div className="card-body">
                        {!!userList?.length ?
                            <UsersListTable userList={userList} handleShowDeleteModal={handleShowDeleteModal}/> :
                            <EmptyState/>}
                    </div>
                </div>
                <ConfirmDelete show={showDeleteModal} setShow={setShowDeleteModal} selectedItem={selectedUser}
                               deleteHandler={() => deleteHandler(`${selectedUser?.id}`)}/>
            </div>
        </Container>
    )
}