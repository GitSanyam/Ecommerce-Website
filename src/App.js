import {Routes,Route, useNavigate, createSearchParams} from "react-router-dom";
import {Products}from "./Components/Products";
import {Product}from "./Components/Product";
import {Cart}from "./Components/Cart";
import {NotFound}from "./Components/Not-Found";
import {NavBar} from "./Components/Navbar/navbar"
import { About } from "./Components/About";


function App() {

  const navigate=useNavigate();
  const onSearch=(searchQuery)=>{
     navigate(`/?${createSearchParams({q:searchQuery})}`)  
  }

  return (
       <>
        <NavBar onSearch={onSearch} cartItemsCount={2}/>
         <Routes>
           <Route path="/" element={<Products/>}/>
           <Route path="/product/:productId" element={<Product/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="*" element={<NotFound/>}/>
           <Route path="/about" element={<About/>}/>
         </Routes>
       </>
    
    
    );
}

export default App;
