import  Create from "./components/Create";
import Home from "./components/Home";
import Root from "./components/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
      <Route path="home" element={<Home/>} />
      <Route path="create" element={<Create/>} />
      </Route>
    )
  );

  return (
 <>

   
      <RouterProvider router={router} />



  
 </>

  );
}

export default App;
