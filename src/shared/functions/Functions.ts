import {NavigateFunction, To} from "react-router-dom";
import {IEnum} from "../model/Enum";

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

export const getAdjustedEnums = (enums: IEnum[]) => {
    return enums?.map(item => ({
        id: item.code,
        label: item.description,
        value: item.code
    }))
}