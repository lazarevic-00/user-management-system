import {Route, Routes} from 'react-router-dom';
import {UsersList} from "./users/list/UsersList";
import {NotFound} from "./error";
import {UsersCreate} from "./users/actions/UsersCreate";
import {UsersUpdate} from "./users/actions/UsersUpdate";
import {UsersPermission} from "./users/actions/UsersPermission";
import {useEffect} from "react";
import {EnumService} from "../store/enums/service";
import {ErrorToast} from "../shared/toasters/toasters";
import {useDispatch} from "react-redux";
import enumsSlice from "../store/enums/enumsSlice";

export function BaseRoutes() {
    const dispatch = useDispatch();
    useEffect(() => {
        EnumService.getEnums().then(response => {
            dispatch(enumsSlice.actions.setEnums(response))
        }).catch(error => ErrorToast(error));
    }, [])
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