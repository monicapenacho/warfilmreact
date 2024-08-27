import React, { useState } from 'react';
import Checkbox from './Checkbox_';

function CheckboxGroup({ options, name, onSelectionChange }) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        let updatedSelection;

        if (checked) {
            // Añadir el país si se selecciona
            updatedSelection = [...selectedOptions, value];
        } else {
            // Eliminar el país si se deselecciona
            updatedSelection = selectedOptions.filter(option => option !== value);
        }

        setSelectedOptions(updatedSelection);
        onSelectionChange(updatedSelection); // Llamar a la función de callback
    };

    return (
        <div>
            {options.map((option, index) => (
                <Checkbox
                    key={index}
                    label={option.text}
                    value={option.value}
                    checked={selectedOptions.includes(option.value)}
                    onChange={handleCheckboxChange}
                />
            ))}
        </div>
    );
}

export default CheckboxGroup;
