
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";

function Electronics(props) {


    const [elec, setelecDta] = useState([]);



    useEffect(() => {

        setelecDta(props.data)

        
    })



    const elecdata = elec.filter((item) => item.category === "electronics")




    return (

        
        <>

        <Navbar/>
            <div className="container">

                <div className="row">


                    {elecdata.map((item) => {

                        return (





                           <div key={item.id} className="menClothings-div">

<Link to={`/electronic/${item.id}`}>  <img src={item.image} width="300px" height="250px"  key={item.id}/> </Link>

                                <p>{item.title}</p>
                                <p>Price:{item.price}</p>

                            </div>
                           
                        )
                    })}
                </div>
            </div>


        </>
    )
}

export default Electronics