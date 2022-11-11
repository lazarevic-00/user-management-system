import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {BaseRoutes} from "./app/routes";

function App() {
    return (
        <BrowserRouter>
            <BaseRoutes/>
        </BrowserRouter>
    );
}

export default App;
