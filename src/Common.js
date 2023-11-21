import React from "react";
// import Footer from "./Footer";

const Common=(props)=>{
    return(
        <div>
           
        <h1 className="Home">{props.name}</h1>
        <h2 className="Helo">{props.Name}</h2>
        <h5 className="Margin">{props.business_name}</h5>
        <h4 className="number">{props.number},{props.Number}</h4>
        <h4 className="number">{props.insta}</h4>
        <h4 className="number">{props.Email}</h4>
        <button className="Button">{props.Bname}</button>
       
        <div>
    
          
        <img src= {props.img}/>
       
        <div className="insta">
       
        < img src={props.insta} />
       
        
       
       
         </div>
        </div>
        
        <div>
       
         <img  className="imag_logo"src={props.img_src}/>
        </div>
        <h1 className="number">{props.Facebook}</h1>
        </div>
    )
}
export default Common;