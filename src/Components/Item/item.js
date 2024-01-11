import { Link } from "react-router-dom";
import Photo from '../Cart/Logos/cart.svg';
import './item.css';
const Item = ({addToCart,data,cartItemsCount}) => {

      const{id,image,title,price}=data
    return (
        <>
          <div className="card" >
            <div className="grid" >              
              <div className="image">
              <Link to={`/product/${id}`}><img src={image} style={{width:270}} alt=""/></Link>
              </div>
              <div className="title">
                   <Link to={`/product/${id}`} className="titleLink"> {title} </Link>
              </div>
              <div className="flex">
                  <span className="price" style={{marginRight:30}}>
                       ${price}
                  </span>
                   <div className="cart" onClick={addToCart}>
                         <Link><img src={Photo}/> </Link>  
                  </div> 
              </div>
            </div>
        </div>  
        </>
    )
}
export {Item}