import { Outlet } from "react-router-dom";

import { Navbar } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;
