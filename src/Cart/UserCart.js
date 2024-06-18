import React from 'react'

import { useState,useEffect } from 'react';


import { useCartData } from '../Context/CartContext'


import { Link } from 'react-router-dom';


const UserCart = () => {

  const { cartData, addToCart, removeCartItems } = useCartData();


  const [quantityData, setQuantityData] = useState(0);



 


  






  


  // console.log(id)

  // console.log(price)


  const Increement = (item) => {


 

    setQuantityData(quantityData + 1)

   
  }



  const Decreement = ( item) => {


    setQuantityData(quantityData - 1)
   


  }

   useEffect(()=>{



   

    

   },[])



  return (

    <>

      <div className='Cart-maindiv '>


      {cartData.length > 0 ? <h2 className='h22'>CART</h2> : <div><h2> Your Cart is Empty </h2>
        <Link to="/main"> <button className='btn btn-warning'>Contine Shopping..</button></Link> </div>}

        


       

        {cartData.map((item) => {
          return (
            <div className='Cart-div mb-3'>

              <img src={item.image} width="100px" height="100px" />
              <h3>Price:{item.price}</h3>

              <div className='d-flex flex-row justify-content-center m-3'>
                <button className='btn btn-primary m-2' onClick={() => Increement(item.price, item.id)}>+</button>
                <h3>Quantity:=<span className='spann'>{quantityData}</span></h3>
                <button className='btn btn-primary m-2' onClick={() => Decreement(item.price, item.id)}>-</button>



              </div>

              <button className='btn btn-danger' onClick={() => removeCartItems(cartData[0])}>Remove</button>


            



            </div>




          )
        })}

       
     


      </div>
    </>
  )
}

export default UserCart