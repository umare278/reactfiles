import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home";
import About from "./About";
import Services from "./Services"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Facebook from "./FaceBook";


const App=()=>{
    return(
      <div>
        <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/About"element={<About/>}/>
          <Route path="/Services"element={<Services/>}/>
          <Route path="/Contact"element={<Contact/>}/>
          <Route path="/Facebook"element={<Facebook/>}/>  
        


        </Routes>
        {/* <Home/>
        <About/>
        <Services/> */}
        </BrowserRouter>
        

      </div>

    ) 
}
export default App;