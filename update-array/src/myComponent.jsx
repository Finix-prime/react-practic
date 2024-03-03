import React, { useState } from "react";

function MyComponent() {
    const [foods, setFoods] = useState(["apple", "orange", "banana"]);
    const [error, setError] = useState('');

    function addFoods() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        if (!foods.includes(newFood)) {
            setFoods(f => [...f, newFood]);
        } else {
            setError('Item already exists!');
        }
    }

    function removeFoods(index) {
        // .filter method wiil loop throught foods array
        // take all element expect i = index
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => removeFoods(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" /><br />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button onClick={() => addFoods()}>Add Food</button>
        </>
    );
}

export default MyComponent