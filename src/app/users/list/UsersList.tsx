import {Container, Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UsersListTable} from "../components/UsersListTable";
import {UserHeader} from "../components/UserHeader";
import {ConfirmDelete} from "../../../shared/components/ConfirmDeleteModal";
import {ErrorToast, SuccessToast} from "../../../shared/toasters/toasters";
import {IUser} from "../../../shared/model/User";
import {EmptyState} from "../../../shared/emptyState/EmptyState";
import {UserService} from "../service";
import {Pagination} from "../../../shared/components/Pagination";

export const UsersList = () => {
    const navigate = useNavigate();
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10
    })
    const [isLoading, setIsLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IUser>()
    const [userList, setUserList] = useState<IUser[]>([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const handlePages = (updatePage: number) => {
        setPagination({...pagination, page: updatePage});
        setPage(updatePage);
    };

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
        setIsLoading(true);
        UserService.getAllUsers(pagination).then(response => {
            setTotalPages(Math.ceil(response?.meta.totalItems / response?.meta?.itemsPerPage));
            setUserList(response.items);
        }).catch(error => ErrorToast(error)).finally(() => setIsLoading(false));
    }, [pagination])

    return (
        <Container className="my-5">
            <UserHeader buttonName="Create user" title="Users list" handleClick={() => navigate("/user/create")}/>
            <div className="centered-content">
                <div className="card w-100">
                    <div className="card-body">
                        {!isLoading ? <>
                            {!!userList?.length ?
                                <UsersListTable userList={userList} handleShowDeleteModal={handleShowDeleteModal}/> :
                                <EmptyState/>}
                        </> : <div>
                            <div className="w-100 text-center">
                                <Spinner animation="border" role="status"/>
                            </div>
                            <p className="text-center">Loading....</p>
                        </div>}

                        {totalPages <= 1 ? '' :
                            <div className="d-flex justify-content-end">
                                <Pagination page={page} totalPages={totalPages}
                                            handlePagination={handlePages}/>
                            </div>
                        }
                    </div>
                </div>

                <ConfirmDelete show={showDeleteModal} setShow={setShowDeleteModal} selectedItem={selectedUser}
                               deleteHandler={() => deleteHandler(`${selectedUser?.id}`)}/>
            </div>
        </Container>
    )
}