import {Route, Routes} from 'react-router-dom';
import {UsersList} from "./users/list/UsersList";
import {NotFound} from "./error";
import {UsersCreate} from "./users/actions/UsersCreate";
import {UsersUpdate} from "./users/actions/UsersUpdate";
import {UsersPermission} from "./users/actions/UsersPermission";

export function BaseRoutes() {
    return (
        <Routes>
            <Route path="/" element={<UsersList/>}/>
            <Route path="/user/create" element={<UsersCreate/>}/>
            <Route path="/user/update/:id" element={<UsersUpdate/>}/>
            <Route path="/user/update/permission/:id" element={<UsersPermission/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}