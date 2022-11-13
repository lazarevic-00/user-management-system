import {Button, Modal} from "react-bootstrap";
import Lottie from "lottie-react";
import trashIcon from "../icons/trashIcon.json";
import React, {SetStateAction} from "react";
import {IUser} from "../model/User";

interface IConfirmModalProps {
    show: boolean;
    setShow: React.Dispatch<SetStateAction<boolean>>;
    deleteHandler: (id: string) => void;
    selectedItem?: IUser
}

export const ConfirmModal = ({show, setShow, deleteHandler, selectedItem}: IConfirmModalProps) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} size="sm" centered>
            <Modal.Body className="d-flex align-items-center flex-column">
                <Lottie animationData={trashIcon} loop={true} style={{width: 100}}/>
                <h5>
                    Are you Sure ?
                </h5>
                <p className="text-center text-muted"
                >
                    Are you Sure You want to Remove <span
                    className="fw-bold text-warning">{selectedItem?.firstName} {selectedItem?.lastName}</span> ?
                </p>
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center justify-content-center border-top-none">
                <Button variant="primary" size="sm" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" size="sm"
                        onClick={() => {
                            handleClose();
                            deleteHandler(selectedItem?.id!)
                        }}>
                    Yes, Delete It!
                </Button>
            </Modal.Footer>
        </Modal>
    )
}