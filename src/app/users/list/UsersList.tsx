import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UsersListTable} from "../components/UsersListTable";
import {UserHeader} from "../components/UserHeader";
import {ConfirmModal} from "../../../shared/components/ConfirmModal";
import {ErrorToast, SuccessToast} from "../../../shared/toasters/toasters";
import {IUser, IUserPagination} from "../../../shared/model/User";
import {EmptyState} from "../../../shared/components/EmptyState";
import {UserService} from "../service";
import {Pagination} from "../../../shared/components/Pagination";
import {LoadingSpinner} from "../../../shared/components/LoadingSpinner";
import {IGetAllUsersProps} from "../interfaces/IUserList";
import {initialUserState} from "../../../shared/initialStates/UserState";
import {UserFilters} from "../components/UserFilters";


export const UsersList = () => {
    const navigate = useNavigate();
    const [pagination, setPagination] = useState<IUserPagination>({
        page: 1,
        limit: 10,
        email: "",
        order: "",
        isActive: "",
        permission: ""
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
        UserService.deleteUser(userId).then(response => {
            if (response) {
                getAllUsers({
                    setIsLoading: setIsLoading,
                    setState: setUserList,
                    setTotalPages: setTotalPages,
                    pagination: pagination
                });
                setSelectedUser(initialUserState);
                SuccessToast(`You have successfully deleted user ${selectedUser?.firstName} ${selectedUser?.lastName}`)
            }
        }).catch(error => ErrorToast(error))
    }

    const getAllUsers = ({setIsLoading, setState, setTotalPages, pagination}: IGetAllUsersProps) => {
        setIsLoading(true);
        UserService.getAllUsers(pagination).then(response => {
            setTotalPages(Math.ceil(response?.meta.totalItems / response?.meta?.itemsPerPage));
            setState(response.items);
        }).catch(error => ErrorToast(error)).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        getAllUsers({
            setIsLoading: setIsLoading,
            setState: setUserList,
            setTotalPages: setTotalPages,
            pagination: pagination
        });
    }, [pagination])

    return (
        <Container className="my-5">
            <UserHeader buttonName="Create user" title="Users list" handleClick={() => navigate("/user/create")}/>
            <div className="centered-content">
                <div className="card w-100">
                    <div className="card-body">
                        <UserFilters pagination={pagination} setPagination={setPagination}/>
                        {!isLoading ? <>
                            {!!userList?.length ?
                                <UsersListTable userList={userList} handleShowDeleteModal={handleShowDeleteModal}/> :
                                <EmptyState/>}
                        </> : <LoadingSpinner/>}

                        {totalPages <= 1 ? '' :
                            <div className="d-flex justify-content-end">
                                <Pagination page={page} totalPages={totalPages}
                                            handlePagination={handlePages}/>
                            </div>
                        }
                    </div>
                </div>

                <ConfirmModal show={showDeleteModal} setShow={setShowDeleteModal} selectedItem={selectedUser}
                              deleteHandler={() => deleteHandler(`${selectedUser?.id}`)}/>
            </div>
        </Container>
    )
}