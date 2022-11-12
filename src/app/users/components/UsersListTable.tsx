import Table from 'react-bootstrap/Table';
import {Button} from "react-bootstrap";
import {ArchiveFill, Check2Circle, PencilSquare, PersonLinesFill} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import {IUser} from "../../../shared/model/User";

interface IUsersListProps {
    handleShowDeleteModal: (userId: string) => void;
    userList: IUser[];
}

export const UsersListTable = ({handleShowDeleteModal, userList}: IUsersListProps) => {
    const navigate = useNavigate();

    return (
        <Table striped bordered hover size="sm">
            <thead>
            <tr className="text-center">
                <th>ID</th>
                <th>Status</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Permission</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody className="text-center">
            {userList?.map(user => (
                <tr key={user?.id}>
                    <td>{user?.id}</td>
                    <td className={`text-${user?.status ? "success" : "danger"}`}>
                        <Check2Circle/>
                        <span className="ms-1">{user?.status ? "Active" : "Inactive"}</span>
                    </td>
                    <td>{user?.firstName}</td>
                    <td>{user?.lastName}</td>
                    <td>@{user?.userName}</td>
                    <td>{user?.permissions}</td>
                    <td>{user?.email}</td>
                    <td className="d-flex justify-content-around ">
                        <Button variant="primary" size="sm"
                                onClick={() => navigate(`/user/update/permission/${user?.id}`)}>
                            <PencilSquare/>
                            Assign Permission
                        </Button>
                        <Button variant="warning" size="sm" onClick={() => navigate(`/user/update/${user?.id}`)}>
                            <PersonLinesFill/>
                            Edit
                        </Button>
                        <Button variant="danger" size="sm" onClick={() => handleShowDeleteModal(user?.id)}>
                            <ArchiveFill/>
                            Delete
                        </Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}