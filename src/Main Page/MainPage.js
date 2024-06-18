
import { Link } from "react-router-dom";
import Navbar from "../LandingPage/Navbar"

import { useEffect,useState } from "react"


function MainPage(props){


    const[dataa ,setDataa ]=useState([]);


    // console.log(props.data)


    useEffect(()=>{


        setDataa(props.data)

        // console.log(dataa)





    })



    let mensData =dataa.filter((item)=>item.category==="men's clothing")

    

    let frstThreeMen =mensData.splice(0,3);

    let womdata =dataa.filter((item)=>item.category==="women's clothing")

    

    let frstThreeWom =womdata.splice(0,3);

    console.log(frstThreeWom)

    let elecData =dataa.filter((item)=>item.category==="electronics")

    

    let frstThreeElec =elecData.splice(0,3);

    let jewData =dataa.filter((item)=>item.category==="jewelery")

    

    let frstThreeJew =jewData.splice(0,3);


    



    return(
        <>
         <div className="Mainpage-div">

        <Navbar/>

       

            <div className="categories d-flex flex-row justify-content-between">

             <Link to="/electronics" className="link">   <li>Electronics</li></Link>
               <Link to="/menclothing" className="link"> <li>Men's Clothing</li></Link>
               <Link to="/womclothing" className="link">  <li>Women's Clothing</li> </Link>
               <Link to="/jewlery" className="link">  <li>Jewlery</li> </Link>

            </div>


                <div className="Mens-div d-flex flex-row justify-content-between">
                    
                   {frstThreeMen.map((item)=>{

                    return(
                        <div key={item.id} className="mensub-div">

                            <img src={item.image}  width="300px" height="250"/>

                            {/* <p>{item.title}</p> */}
                            <hr/>

                            <h2>{item.category}</h2>
                            
                        </div>
                    )
                   })}
                   </div>

                   <div className="Mens-div d-flex flex-row justify-content-between">
                    
                   {frstThreeWom.map((item)=>{

                    return(
                        <div key={item.id} className="mensub-div">

                            <img src={item.image}  width="300px" height="250"/>

                            {/* <p>{item.title}</p> */}
                    
                            <hr/>

                            <h2>{item.category}</h2>
                       
                        </div>
                    )
                   })}
                   </div>
                   <div className="Mens-div d-flex flex-row justify-content-between">
                    
                   {frstThreeElec.map((item)=>{

                    return(
                        <div key={item.id} className="mensub-div">

                            <img src={item.image}  width="300px" height="250"/>

                            {/* <p>{item.title}</p> */}
                            <hr/>

                            <h2>{item.category}</h2>
                          
                        </div>
                    )
                   })}
                   </div>
                   <div className="Mens-div d-flex flex-row justify-content-between">
                    
                   {frstThreeJew.map((item)=>{

                    return(
                        <div key={item.id} className="mensub-div">

                            <img src={item.image}  width="300px" height="250"/>

                            {/* <p>{item.title}</p> */}
                            <hr/>

                            <h2>{item.category}</h2>


                      
                        </div>
                    )
                   })}
                   </div>

        </div>



        </>
    )
}

export default MainPage