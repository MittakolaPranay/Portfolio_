import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

import "./App.css";

function App() {

    let route = createBrowserRouter([
        {
            path : "/",
            element : <Home />
        },
        {
            path : "/about",
            element : <AboutMe />
        }
    ])
    return <RouterProvider router={route}/>
}

export default App;
