import React, { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmploy, setIsEmploy] = useState(false);

    const updateName = () => {
        setName("note");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployStatus = () => {
        setIsEmploy(!isEmploy)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increase Age</button>

            <p>Employ: {isEmploy ? "Yes" : "No"}</p>
            <button onClick={toggleEmployStatus}>Employ Status</button>
        </div>
    );
}

export default MyComponent