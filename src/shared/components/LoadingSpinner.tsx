import {Spinner} from "react-bootstrap";

export const LoadingSpinner = () => {
    return (
        <>
            <div className="w-100 text-center">
                <Spinner animation="border" role="status"/>
            </div>
            <p className="text-center">Loading....</p>
        </>
    )
}