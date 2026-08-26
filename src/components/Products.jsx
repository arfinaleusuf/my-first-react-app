import ProductCart from "./ProductCart";

const Products = () => {

    const products = [
        {
            name: "iPhone 15",
            description: "Apple smartphone with A16 Bionic chip and 48MP camera.",
            price: 799,
            isStock: true
        },
        {
            name: "Samsung Galaxy S24",
            description: "Premium Android smartphone with an AMOLED display.",
            price: 899,
            isStock: true
        },
        {
            name: "Sony WH-1000XM5",
            description: "Wireless headphones with excellent noise cancellation.",
            price: 349,
            isStock: true
        },
        {
            name: "MacBook Air M3",
            description: "Lightweight laptop powered by Apple's M3 chip.",
            price: 1099,
            isStock: false
        },
        {
            name: "Logitech MX Master 3S",
            description: "Advanced wireless mouse designed for productivity.",
            price: 99,
            isStock: true
        },
        {
            name: "iPad Air",
            description: "Versatile tablet suitable for study, work, and entertainment.",
            price: 599,
            isStock: false
        }
    ];

    // const products = [];
    return (
        <div className='poducts_parents'>
            <h2>All Products</h2>

            {products.length == 0 ? (
                <h2>Products not available !!</h2>
            ) : (
                <div className="products">
                    {products.map((pd, ind) => {
                        console.log(ind, "ind")
                        return <ProductCart key={ind} product={pd} />
                    })}
                </div>
            )}
        </div>
    );
};

export default Products;