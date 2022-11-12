import {ClipboardData} from "react-bootstrap-icons";

export const EmptyState = () => {
    return (
        <div className="d-flex flex-column text-center text-muted w-100 py-5">
            <ClipboardData size={50} className="text-muted w-100 mb-3"/>
            <h1>NOTHING !</h1>
            <span>Your list is empty</span>
        </div>
    )
}