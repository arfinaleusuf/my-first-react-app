
const UnauthorizedCart = ({ name }) => {
    return (
        <div className="unothorized-message-cart">
            <h2>Sorry {name} you are unauthorized user, Good Bye</h2>
        </div>
    );
};

export default UnauthorizedCart;