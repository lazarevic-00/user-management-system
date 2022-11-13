import {BaseModel} from "../../shared/model/BaseModel";
import {requests} from "../../utils/helpers/api.services";
import {USER_URL} from "../../utils/helpers/api.routes";
import {IUser, IUserPagination} from "../../shared/model/User";

export const UserService = {
    getAllUsers: (params: IUserPagination): Promise<BaseModel<IUser[]>> => requests.get(USER_URL, params),
    getUser: (id: string) => requests.get(`${USER_URL}/${id}`),
    updateUser: (body: IUser, id: string) => requests.put(`${USER_URL}/${id}`, body),
    createUser: (body: IUser) => requests.post(USER_URL, body),
    deleteUser: (id: string) => requests.delete(`${USER_URL}/${id}`),
    updatePermission: (permission: string, id: string) => requests.patch(`${USER_URL}/${id}`, {
        permission: permission
    })
}

