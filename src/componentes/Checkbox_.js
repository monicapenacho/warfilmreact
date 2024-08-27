import React from 'react';

function Checkbox({ label, value, checked, onChange }) {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                {label}
            </label>
        </div>
    );
}

export default Checkbox;




/*<div>
<Input type="checkbox" name="info" id="info" />
<Label htmlFor="info" text="Deseo recibir información sobre novedades y ofertas" />
</div>

<div>
<Input type="checkbox" name="condiciones" id="condiciones" />
<Label htmlFor="condiciones" text="Declaro haber leido y aceptar las condiciones generales del programa y la normativa sobre protección de datos" />
</div>*/

