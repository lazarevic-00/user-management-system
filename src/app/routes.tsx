import {Route, Routes} from 'react-router-dom';
import {Users} from "./users";

export function BaseRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Users/>}/>
        </Routes>
    )
}