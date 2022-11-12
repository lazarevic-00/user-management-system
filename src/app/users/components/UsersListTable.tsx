import Table from 'react-bootstrap/Table';
import {Button} from "react-bootstrap";
import {ArchiveFill, PencilSquare, PersonLinesFill} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";

interface IUsersListProps {
    handleShowDeleteModal: () => void;
}

export const UsersListTable = ({handleShowDeleteModal}: IUsersListProps) => {
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
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody className="text-center">
            <tr>
                <td>1</td>
                <td>Active</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>mark@mistral.com</td>
                <td className="d-flex justify-content-around">
                    <Button variant="primary" size="sm" onClick={() => navigate(`/user/update/permission/${1}`)}>
                        <PencilSquare/>
                        Assign Permission
                    </Button>
                    <Button variant="warning" size="sm" onClick={() => navigate(`/user/update/${1}`)}>
                        <PersonLinesFill/>
                        Edit
                    </Button>
                    <Button variant="danger" size="sm" onClick={handleShowDeleteModal}>
                        <ArchiveFill/>
                        Delete
                    </Button>
                </td>
            </tr>
            </tbody>
        </Table>
    )
}