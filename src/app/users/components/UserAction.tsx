import {Button, Col, Form, Row} from "react-bootstrap";
import {IUserActionProps} from "../interfaces/IUserComponents";
import {UserActionFields} from "./UserActionFields";
import {UserPermissionFields} from "./UserPermissionFields";
import {IUser} from "../../../shared/model/User";

export const UserAction = ({
                               handleSubmit,
                               isEditPermission = false,
                               currentUser,
                               setCurrentUser,
                               isEditForm = false
                           }: IUserActionProps) => {

    return (
        <div className="card ">
            <div className="card-body">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        {isEditPermission ?
                            <UserPermissionFields currentUser={currentUser as IUser} setCurrentUser={setCurrentUser}/> :
                            <UserActionFields currentUser={currentUser as IUser} setCurrentUser={setCurrentUser}
                                              isEditForm={isEditForm}/>}
                        <Col md={12}>
                            <Button variant="primary" type="submit" className="ms-auto" size="sm">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>

    )
}