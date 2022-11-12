import {Col, Form} from "react-bootstrap";

export const UserPermissionFields = () => {
    return (
        <Col sm={12} className="mb-3">
            <Form.Check
                type="radio"
                label="User"
                name="role"
                id={`user-radio`}
            />
            <Form.Check
                type="radio"
                name="role"
                label="Admin"
                id={`admin-radio`}
            />
        </Col>
    )
}