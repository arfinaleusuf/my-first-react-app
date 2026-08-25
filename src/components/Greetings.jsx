import UnauthorizedCart from "./UnauthorizedCart";

const Greetings = ({greet="Hello", name="Phitron", isLogedIn=false, specialMessege}) => {
   console.log(isLogedIn, name)
    if(!isLogedIn){

    return <UnauthorizedCart name={name}/>
   }

    return (
        <div className="greetings-cart">
            <h2 className='demo'>{greet}, {name}</h2>
            <p>{specialMessege && specialMessege }</p>
        </div>
    );
};

export default Greetings;