import "./styles.scss";
import {Route, Routes as ReactRoutes} from "react-router";
import {HomePage} from "../../home-page";
import {BrowserRouter} from "react-router-dom";

export function Routes() {
    return <BrowserRouter>
        <ReactRoutes>
            <Route path="/" element={<HomePage/>}/>
        </ReactRoutes>
    </BrowserRouter>
}