import {Button} from "react-bootstrap";
import {IUserHeaderProps} from "../interfaces/IUserComponents";


export const UserHeader = ({handleClick, title, buttonName}: IUserHeaderProps) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                    <h3>
                        {title}
                    </h3>
                    <Button variant="primary" size="sm" onClick={handleClick}>
                        {buttonName}
                    </Button>
                </div>
            </div>
        </div>
    )
}