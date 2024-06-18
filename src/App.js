import logo from './logo.svg';
import './App.css';

import Navbar from './LandingPage/Navbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import WomensClothing from './Main Page/WomensClothing';
import Clothing from './Main Page/Clothing';
import Electronics from './Main Page/Electronics';

import Jewelery from './Main Page/Jewelery';

import { useEffect,useState } from 'react';


import Landing from './LandingPage/Landing';
import MainPage from './Main Page/MainPage';
import SingleElect from './Singles/SingleElect';
import UserCart from './Cart/UserCart';


import { CartProvider } from './Context/CartContext';
import Singlejew from './Singles/Singlejew';
import SingleMen from './Singles/SingleMen';
import SingleWom from './Singles/SingleWom';




function App() {
  const [data, setData] = useState([])

useEffect(() => {

  fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(data => {

            console.log(data)
          setData(data)



      })







}, [])

return (
    <>
     <CartProvider>

    <BrowserRouter>

    <Routes>
      

      

    <Route path="/landing" element ={<Landing/>} />


    <Route path="/main"  element={<MainPage data={data}/>}/>






   <Route path="/menclothing" element={<Clothing data={data}/>} />
   <Route path="/womclothing" element={<WomensClothing data={data}/>} />
   <Route path="/jewlery" element={<Jewelery data={data}/>} />
   <Route path="/electronics" element={<Electronics data={data}/>} />


   <Route path="/electronic/:id" element={<SingleElect data={data}/>}/>
   <Route path="/jewelry/:id" element={<Singlejew data={data}/>}/>
   <Route path="/mensclothing/:id" element={<SingleMen data={data}/>}/>
   <Route path="/womenclothing/:id" element={<SingleWom data={data}/>}/>

   <Route path="/cart" element={<UserCart/>}/>



  
    </Routes>

    </BrowserRouter>  
    </CartProvider>
   
    </>
  );
}

export default App;
