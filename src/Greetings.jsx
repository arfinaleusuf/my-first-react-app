const Greetings = () => {
    const currentYear = new Date().getFullYear()
    return (
        <>
            <h1 className='demo'>Good morning</h1>
            <p>Phitron</p>
            <h3>{currentYear}</h3>
        </>
    );
};

export default Greetings;