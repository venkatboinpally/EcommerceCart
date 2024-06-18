
import { useEffect, useState } from "react";



import Clothing from "./Main Page/Clothing";

import WomensClothing from "./Main Page/WomensClothing";
import { Axios } from "axios";
import Electronics from "./Main Page/Electronics";
import Jewelery from "./Main Page/Jewelery";
import Navbar from "./LandingPage/Navbar";



function Cal() {




    const [data, setData] = useState([])







    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then(data => {

                //  console.log(data)
                setData(data)



            })







    }, [])













    return (
        <>

        <Navbar/>

       

            <div className="items-div  d-flex flex-row">


                <Clothing data={data} />
            </div>

            <div className="items-div  d-flex flex-row">



                <WomensClothing data={data} />
            </div>


            <div className="items-div  d-flex flex-row">
                <Electronics data={data} />
            </div>
            <div className="items-div  d-flex flex-row">
                <Jewelery data={data} />
            </div>












        </>
    )
}



export default Cal






