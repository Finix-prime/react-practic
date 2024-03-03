import { useState } from 'react';

function CheckBox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                Checkbox
            </label>
            <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}.</p>
        </>
    );

}
export default CheckBox