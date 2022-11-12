import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {handleBack} from "../../shared/functions/Functions";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found-page">
            <h1>404</h1>
            <h6>Not found</h6>
            <p className="text-muted">
                The resource requested could not be found on this server!
            </p>
            <Button variant="secondary" size="sm" onClick={() => handleBack(navigate, "/")}>Go back</Button>
        </div>
    )
}