import { useEffect, useState } from "react"
import Navbar from "../LandingPage/Navbar";

import { Link } from "react-router-dom";


function WomensClothing(props) {


    const [wom, setWom] = useState([]);


    useEffect(() => {

        setWom(props.data)



    })


    let womClo = wom.filter((item) => item.category === "women's clothing")

    return (
        <>
        <Navbar/>
            <div className="container">

                <div className="row">


                    {womClo.map((item) => {

                        return (





                            <div key={item.id} className="menClothings-div">

                            <Link to={`/womenclothing/${item.id}`}>    <img src={item.image} width="300px" height="250px" /></Link>

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

export default WomensClothing