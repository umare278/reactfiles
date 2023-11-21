import React from "react";

const Ncard=()=>{
    return(

        { Sdata.map((val)=>{
            return(
                <Card 
                img={val.img}
                title={val.title}
                text={val.text}
                button={val.butt}/>
            )
        })}


    )
}
export default Ncard