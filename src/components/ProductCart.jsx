
const ProductCart = ({title, price, isStock}) => {
    return (
        <div className="product-cart">
            <h2>Title: {title}</h2>
            <h2>Price: {price}</h2>
            <h2>Is Stock: {isStock ? "Stock available" : "Stock Not available"}</h2>
        </div>
    );
};

export default ProductCart;