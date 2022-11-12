import {NavigateFunction, To} from "react-router-dom";

export const handleBack = (navigate: NavigateFunction, route: To) => {

    return navigate(route);
}

