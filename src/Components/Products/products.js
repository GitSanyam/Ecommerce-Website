import {Item} from '../Item/item';
import {FakeStoreApi} from '../../Services/fake-store-api';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Products= ()=>{

const[loading,setLoading]=useState(true);
const[products,setProducts]=useState([]);    
const[query,setQuery]=useSearchParams()

const searchQuery=query.get('q');

useEffect(()=>{
    
    const fetchProducts = async ()=>{
        setLoading(true);
        const products = searchQuery ? await FakeStoreApi.
        fetchProductBySearchQuery(searchQuery) :await FakeStoreApi.
        fetchAllProducts();
        setProducts(products);
        setLoading(false);
       
    }
       fetchProducts().catch(console.error);

},[searchQuery])

if(!loading && searchQuery && !products.length){

    return(
       <div className='container'>
           <div className='product py-2 '>
               <div className='details p-3 '>No products found matching your search...</div>            
           </div>
       </div>

    )

}

return(
    <>
      <div className='container' >
        <div className='products my-5'>
            <div className='grid'>
                {loading ? (
                    <div className='loader' />
                ):(
                    products.map((product)=>(
                        <Item key = {product.id}  data={product} 
                        addToCart={ ()=>{}}/>
                    ))
                )}
            </div>

        </div>
        

    </div>  
    </>
)
}
export {Products};