import {Button, Col, Form, Row} from "react-bootstrap";

interface IUserActionProps {
    handleSubmit: (event: React.FormEvent) => void;
}

export const UserAction = ({handleSubmit}: IUserActionProps) => {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name"/>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name"/>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label className="required-input">Username</Form.Label>
                                <Form.Control type="text" required placeholder="Enter username"/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label className="required-input">Email address</Form.Label>
                                <Form.Control type="email" required placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label className="required-input">Password</Form.Label>
                                <Form.Control type="password" required placeholder="Password"/>
                            </Form.Group>
                        </Col>

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