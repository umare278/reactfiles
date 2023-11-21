import React from "react";



const Footer=()=>{
   const Year=new Date().getFullYear();
    return(
        <footer>
       <h5 className="copy_Ride">Copyride © {Year}</h5>
       </footer>
    )
}
export default Footer;