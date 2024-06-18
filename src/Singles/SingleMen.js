


import { useParams } from "react-router-dom"


import { useState, useEffect } from "react";

import { useCartData } from "../Context/CartContext";
import Navbar from "../LandingPage/Navbar";
function SingleMen(data) {


    const { id } = useParams()



    const { cartData, addToCart } = useCartData();


    const [fdata, setFdata] = useState([])



    useEffect(() => {





        // console.log(data.data)


        const filteredData = data.data.filter((i) => i.id == id)



        setFdata(filteredData)










    }, [])


    console.log(typeof (fdata))













    return (
        <>
            <Navbar />



            <div className="single-div">


                {fdata.map((item) => {
                    return (

                        <div>


                            <div>

                            <img src={item.image} width="300px" height="200px" />
                            </div>

                            <div>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <h3><span className="spann">Price:{item.price}</span></h3>
                            </div>

                        </div>
                    )
                })}
                <button className="btn btn-warning" onClick={() => addToCart(fdata[0])} >Add to Cart</button>
            </div>



        </>
    )
}

export default SingleMen