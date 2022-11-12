import {Button, Col, Form, Row} from "react-bootstrap";
import {IUserActionProps} from "./dto/IUserComponents";
import {UserActionFields} from "./UserActionFields";
import {UserPermissionFields} from "./UserPermissionFields";


export const UserAction = ({handleSubmit, isEditPermission = false}: IUserActionProps) => {
    return (
        <div className="card ">
            <div className="card-body">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        {isEditPermission ? <UserPermissionFields/> : <UserActionFields/>}
                        <Col md={12}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>

    )
}