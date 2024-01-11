import { Link } from "react-router-dom";
import React, { useState } from "react";
import './navbar.css';
import cartLogo from '../Cart/Logos/cart.svg'


const NavBar = ({onSearch,cartItemsCount=1}) => {

   const [searchQuery,setSearchQuery]=useState('');

   const handleSubmit=()=>{
        if(searchQuery.trim().length){          //if search box has something typed instead of kept blank
          onSearch(searchQuery.trim())
        }
        setSearchQuery('')  //if kept blank or space bar and then searched thn it will be again set to empty
   }
   return (
      <div >
         <nav className="main-nav">
            <a class="nav-link"   href="/" className="logo"  >
               <h2>
                  <span>G</span>ADGET<span>G</span>O 
                 
               </h2>
            </a>

            <div className="menu-link">
               <ul>
               <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
                  <li>
                     <a class="nav-link" href="/products">Products</a>
                  </li>

                  <li>
                     <a class="nav-link" href="/about">About</a>
                  </li>
                  <li>
                     <Link 
                     class="nav-link" 
                     to="/cart" 
                     className="Nav-cart" 
                     >
                        <img src={cartLogo} className="cartLogo" alt="cart" />
                        {
                           cartItemsCount > 0 &&(
                              <div className="cartCounter"  >
                                  {cartItemsCount <= 9 ? cartItemsCount : "9+"}
                              </div>
                           )
                        }
                     </Link>
                  </li>
               </ul>


            </div>


            <div className="search-bar" >
               <form class="form-inline my-2 my-lg-0">
                  <input  
                  class="form-control mr-sm-2" 
                  style={{width:290}} 
                  value={searchQuery} 
                  onChange={e=>setSearchQuery(e.target.value)} 
                  type="search" 
                  placeholder="Search products..." 
                  required 
                  aria-label="Search" />
                  <button onClick={handleSubmit} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search </button>
               </form>

            </div>

         </nav>

      </div>

   )

}
export { NavBar };