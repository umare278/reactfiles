import React from "react";
import './App.css'
import Sdata from "./Sdata";



const Card = (props) => {
    return (
        <div className="my-5">

            <div className="container-fluid nav_big">
                <div className="row">
                    <div className="col-sm">
                        <div className="row">
                            <div className="col -md-6 pt-lg-0 order-2 order lg-1">
                                <div className="col-lg-9 order-1 order-lg-2 header-img">
                                    <img className="card" src={props.img} />
                                    <div className="card-body">
                                        <h4 className="card-title ">{props.title}</h4>
                                        <p class="card-text">{props.text}</p>
                                        <a href="#" class="btn btn-primary">{props.button}</a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
const Services = () => {

    return (
        <div>
            <h1 >Our Services</h1>

            {Sdata.map((val) => {
                return (
                    <div>
                        <Card
                            classname="card" img={val.img}
                            classname="card" title={val.title}
                            classname="card" text={val.text}
                            classname="card" button={val.button} />
                    </div>
                )
            })}


        </div>


    )

}





export default Services;