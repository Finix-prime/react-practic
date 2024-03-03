function Button() {

    let count = 0;
    const handleClick = (event) => {
        console.log(event);
        event.target.textContent = "OUCH!";
    };

    return (
        <button onDoubleClick={(event) => handleClick(event)}>Click me</button>
    );
}

export default Button