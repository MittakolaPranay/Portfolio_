import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutMe";

import "./App.css";

function App() {

    let route = createBrowserRouter([
        {
            path : "/",
            element : <Home />
        },
        {
            path : "/about",
            element : <About />
        },
    ])
    return <RouterProvider router={route}/>
}

export default App;
