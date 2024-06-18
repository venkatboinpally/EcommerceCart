
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


import { useCartData } from "../Context/CartContext";

function Navbar(props){


    const{cartData}=useCartData();




    //  const[searchterm,setSearch] =useState("");


    //  const navigate =useNavigate;



   
//  const handleSubmit=(e)=>{

//     e.preventDefault()

//     navigate(`${searchterm}`)







//  }


    

    return(
        <>

      

        <div className="nav-div">
            <ul className="d-flex flex-row justify-content-between">

                <Link to="/main" className="link"><li>Home</li></Link>
                

               

                <li>DIPPAS CART</li>

                {/* <form onSubmit={handleSubmit}>

                    <input type="text" value={searchterm} onChange={(e)=>setSearch(e.target.value)}></input>

                </form> */}

                

              
                <Link to="/cart" className="link"><li ><i className="fa-solid fa-cart-shopping" ></i>{cartData.length}</li></Link>

            </ul>
            </div>


            

            
            



            
            

       

        

   
        
        </>
    )
}

export default Navbar 
