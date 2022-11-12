import {Route, Routes} from 'react-router-dom';
import {Users} from "./users/list";
import {NotFound} from "./notFound";
import {UsersCreate} from "./users/actions/UsersCreate";
import {UsersUpdate} from "./users/actions/UsersUpdate";

export function BaseRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Users/>}/>
            <Route path="/user/create" element={<UsersCreate/>}/>
            <Route path="/user/update/:id" element={<UsersUpdate/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}