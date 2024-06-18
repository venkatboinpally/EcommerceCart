import { useEffect, useState } from "react"



import { Link } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";



function Clothing(props) {


    const [clothd, setclthdata] = useState([]);


    useEffect(() => {

        setclthdata(props.data)


        console.log(clothd)


    }, [props.data])


    let menClo = clothd.filter((item) => item.category === "men's clothing")


    console.log(menClo)

    return (
        <>
        <Navbar/>


            <div className="container">

                <div className="row">



                    {menClo.map((item) => {

                        return (


                            <div key={item.id} className="menClothings-div">

                           <Link to={`/mensclothing/${item.id}`}>    <img src={item.image} width="300px" height="200px" className="mencothing-img" /></Link> 

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

export default Clothing