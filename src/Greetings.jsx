const Greetings = ({greet, name}) => {
   
    const currentYear = new Date().getFullYear()
    return (
        <div className="greetings-cart">
            <h1 className='demo'>{greet}, {name}</h1>
        </div>
    );
};

export default Greetings;