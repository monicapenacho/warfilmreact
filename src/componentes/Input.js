export default function Input({ type, ...rest }) {
    return (
        <input
            type={type}
            {...rest}
        />
    );
}


/*
<div>
<p>Sexo:</p>
<Input type="radio" name="sexo" id="sexo-h" value="h" />
<Label htmlFor="sexo-h" text="hombre" />
<Input type="radio" name="sexo" id="sexo-m" value="m" />
<Label htmlFor="sexo-m" text="mujer" />
</div>

 <div>
                <Label htmlFor="correo" text="Correo:" />
                <Input type="text" name="correo" id="correo" maxLength={100} />
            </div> */