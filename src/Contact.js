import React, { useState } from "react";
import Common from "./Common";
import Footer from "./Footer";
 import './App.css'
import { NavLink } from "react-router-dom";

const Contact=()=>{
    const[fullname,setfullname]=useState({
        firstname:'',
        lastname:'',
        Email:'',
        Password:'',
    });

    const inputEvent=(event)=>{
        const{name,value}=event.target;

        setfullname ((preData)=>{
               return{
                ...preData,
                [name]:value,
               } 
        })
    };
    const onSubmits=(event)=>{
        event.preventDefault();
        alert("ok");
    }
    return(
        <div>


<div className="body">

<select className='select'>
         <option  > <a href='/Services'>clicked</a></option>
        <option>Amazon</option>
        <option>Website Developing</option>
        <option>Digital Marketing</option>
        <option>Network Marketing</option>
        </select> 
<center><h1 className="contact_with">Contact with us </h1> </center>
<center><h2 className="contact-info">Contact Information</h2></center>
            <p>Feel free to contact us through any of the following methods:</p>

            <ul>
                <li>Email: <a href="tipumughal900@gmail.com">contact@gmail .com</a></li>
                <li>Phone: (+92)3244225562</li>
                <li>Phone: (+92)3111438963</li>
                <li>Address: #2 Main Street, Lahore, Alite Town , Near Superior College</li>
            </ul>

          
            
           <div className="login">
        <div className="login-container">
        <form onSubmit={onSubmits}>
        <div className="login-header {">
            <div className="login-input:focus ">
                <div className="login-containe">

            {/* <h2>{fullname.firstname}{fullname.lastname}{fullname.Email}</h2> */}
           
            <input className="login-input"type="text" placeholder="Enter your Firstname"
            onChange={inputEvent}
            name="firstname"
            value={fullname.firstname}/>
            <br/>

            <input className="login-input " type="text" placeholder="Enter your Lastname"
            onChange={inputEvent}
            name="lastname"
            value={fullname.lastname}/>
            <br/>
            <input className="login-input " type="text" placeholder="Enter your Email"
            onChange={inputEvent}
            name="Email"
            value={fullname.Email}/>
            <br/>

            <input className="login-input " type="text" placeholder="Enter your Password"
            onChange={inputEvent}
            name="Password"
            value={fullname.Password}/>
<div  className="container ">
    <h2>Get in Touch</h2>
            <p>If you have any questions or inquiries, please fill out the form below. We'll get back to you as soon as possible.</p>
</div >
            <textarea id="message" name="message" rows="4" required></textarea>

            <div>
            
            <button className="login-button:hover" type="onsubmit">clicked me</button>
           
          
            
           
            
            
            </div>
            
            </div>
            
            
            </div>
            
            </div>
            
            </form> 
        </div>
         </div>
        </div>
        <br/>
        <div>
        <center>  <h2 className="contact-information">Follow Us
         <p>Connect with us on social media:</p>
         <ul class="social-links">
             <li><a href ="/FceBook"><img src="https://tse1.mm.bing.net/th?id=OIP.NpCTjwytSqLdGC27kedDYAHaHa&pid=Api&P=0&h=220" alt="Facebook"/></a></li>
             <li><a href ="/FceBook"><img src="https://tse1.mm.bing.net/th?id=OIP.hbr47SG8Nl1CUsQBVLhz_AHaHa&pid=Api&P=0&h=220" alt="Twitter"/></a></li>
             <li><a href ="/FceBook"><img src="https://tse4.mm.bing.net/th?id=OIP.4yOhxJCs2K0_hNHRpteMmgHaHZ&pid=Api&P=0&h=220" alt="LinkedIn"/></a></li>
             
         </ul>
         </h2></center>
         </div> 
         </div>
         
      

         


        
        
        
       
    )
}
export default Contact;