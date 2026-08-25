
const ProductCart = ({product}) => {
    const {name, description,price, isStock} = product
    return (
        <div className="product-cart">
            <h2>Title: {name}</h2>
            <h2>Description: {description}</h2>
            <h2>Price: {price}</h2>
            <h2>Is Stock: {isStock ? "Stock available" : "Stock Not available"}</h2>
        </div>
    );
};

export default ProductCart;