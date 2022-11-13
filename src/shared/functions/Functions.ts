import {NavigateFunction, To} from "react-router-dom";

export const handleBack = (navigate: NavigateFunction, route: To) => {
    return navigate(route);
}

export const getPermissionName = (permission: string) => {
    switch (permission) {
        case "ad":
            return "Admin";
        case "us":
            return "User";
        default:
            return null
    }
}
