import {Button} from "react-bootstrap";

interface IUserHeaderProps {
    handleClick: () => void;
    title: string;
    buttonName: string;
}

export const UserHeader = ({handleClick, title, buttonName}: IUserHeaderProps) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <h3>{title}</h3>
            <Button variant="primary" size="sm" onClick={handleClick}>
                {buttonName}
            </Button>
        </div>
    )
}