
const ProductCart = ({product}) => {
    const {name, description,price, isStock} = product

    const addToCartHandler = (e) => {
        console.log(e,"e");
        e.target.textContent = 'clicked'
        e.target.style.backgroundColor = 'red'
        // console.log(`${name} added to cart`);
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
            <button onClick={(event) =>addToCartHandler(event)}>Add to cart</button>
            <button onClick={(event)=>buyNowHander(event)}>Buy Now</button>
        </div>
    );
};

export default ProductCart;