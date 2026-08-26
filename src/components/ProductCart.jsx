import { useState } from "react";

const ProductCart = ({product}) => {
    const {name, description,price, isStock} = product

    const [count, setCount] = useState(0)
    const [isAddedCart, setIsAddedCart] = useState(false)

    const addToCartHandler = (e) => {
        console.log(e,"e");
        e.target.textContent = 'clicked'
        // e.target.style.backgroundColor = 'red'
        // console.log(`${name} added to cart`);
        setIsAddedCart(!isAddedCart)
        alert(`${name} added to cart`)
    }

    const buyNowHander = () => {
        alert(`${name} purchased Successfully`)
    }

    return (
        <div className="product-cart">
            <h2>Title: {name}</h2>
            <h2>Description: {description}</h2>
            <h2>Price: {price}</h2>
            <h2>Is Stock: {isStock ? "Stock available" : "Stock Not available"}</h2>
            <button onClick={(event) =>addToCartHandler(event)} className={`${isAddedCart ? "add-to-cart" : "add-to-cart-added"}`}>{isAddedCart ? "Added": "Add to cart"}</button>
            <button onClick={(event)=>buyNowHander(event)}>Buy Now</button>
            <h2>count: {count}</h2>
            <button onClick={()=>setCount(count + 1)}>Increment count</button>
        </div>
    );
};

export default ProductCart;