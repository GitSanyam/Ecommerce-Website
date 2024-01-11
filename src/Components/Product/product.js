import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../Services/fake-store-api'
import { Link, useParams } from "react-router-dom"
import cartLogo from '../Cart/Logos/cart.svg'
import './product.css'
const Product = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const { productId } = useParams();
   

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const product = await FakeStoreApi.fetchProductById(productId);
            setProduct(product);
            setLoading(false);
        }
        fetchProduct().catch(console.error)
    }, [productId])

    if (!loading && !product) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">
                        Product not found. Please visit{" "}
                        <Link to="/" replace>
                            home
                        </Link>{" "}
                        to see all available products
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container">
             {loading ? (
                <div className={"loader"}></div>
            ) : (
                <div className="product py-2">
                    <div className="details grid p-3">
                         <div className="product-image">
                            <img className="photo" src={product.image} alt="" />
                        </div>
                        <div className="info">
                            <div className="description">
                                <h3>{product.title}</h3>
                                <p className=" my-2">{product.description}</p>
                            </div>
                            <div className="flex">
                                <span className="itemprice">${product.price}</span>
                                <span className="cartlogo" onClick={() => {}}>
                                   <Link> <img src={cartLogo} alt="" /> Add to Cart</Link>
                                </span>
                            </div>
                        </div> 
                    </div>
                </div> 
            )} 
        </div>
    )
}

export { Product }