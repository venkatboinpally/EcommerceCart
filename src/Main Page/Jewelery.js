import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";

function Jewelery(props) {


    const [elec, setjewDta] = useState([]);



    useEffect(() => {

        setjewDta(props.data)

        // console.log(elec)
    })



    let jewdata = elec.filter((item) => item.category === "jewelery")




    return (
        <>
        <Navbar/>

            <div className="container">

                <div className="row">

                    {jewdata.map((item) => {

                        return (





                            <div key={item.id} className="menClothings-div">

                               <Link to={`/jewelry/${item.id}`}> <img src={item.image} width="300px" height="250px" /></Link>

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

export default Jewelery