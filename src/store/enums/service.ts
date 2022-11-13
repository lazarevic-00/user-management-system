import {requests} from "../../utils/helpers/api.services";
import {ENUM_URL} from "../../utils/helpers/api.routes";

export const EnumService = {
    getEnums: () => requests.get(ENUM_URL)
}