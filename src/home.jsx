import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Nav from "./component/nav";
import Slider from "./component/slider";
import Flib from "./component/flibbox";
import Objectives from "./component/objectives";
import Footer from "./component/footer";
 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<Layout />}>
       <Route path="/nav" element={<Nav />} />
       <Route path="/slider" element={<Slider />} />
       <Route path="/flib" element={<Flib />} />
       <Route path="/objectives" element={<Objectives />} />
       <Route path="/footer" element={<Footer />} /> 
     </Route>
   )
);
 function Layout() {
   return (
     <div>
       <Nav />
       <Slider />
       <Flib />
       <Objectives />
       <Footer />
     </div>
   );
 }

const Home = () => {
  return (
    <div className="bg-white">
      <RouterProvider router={router} />
    </div>
  );
};

export default Home;
