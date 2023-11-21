import React from "react";
import ReactDom from "react-dom"
import App from "./App";

const My=()=>{

  return(

  
  <App/>
  )
}



const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<My/>)
