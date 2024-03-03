import React, { useState } from "react";

function MyComponent() {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ferrari",
        model: "Enzo10"
    });

    function yearChange(event) {
        setCar(c => ({ ...c, year: event.target.value }));
    }
    function makeChange(event) {
        setCar(m => ({ ...m, make: event.target.value }));
    }
    function modelChange(event) {
        setCar(mo => ({ ...mo, model: event.target.value }));
    }

    return (
        <>
            <div>
                <p>Your favorite is: {car.year} {car.make} {car.model}</p>
                <input type="number" value={car.year} onChange={yearChange} /><br />
                <input type="text" value={car.make} onChange={makeChange} /><br />
                <input type="text" value={car.model} onChange={modelChange} /><br />
            </div>
        </>
    );
}
export default MyComponent