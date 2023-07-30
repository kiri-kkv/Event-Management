import React from "react";
import { useState } from "react";
import { Label, Input } from "../../styledCss";

const TextInput = React.forwardRef(
  ({ type, label, validation, htmlFor, id, required ,onChange }, ref) => {
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      const validationError = validation ? validation(inputValue) : "";

      setError(validationError);
    };

    const style = {
      color: "rgb(4,4,56)",
      fontSize: "1rem",
      marginBottom: ".5rem",
      fontWeight: "700",
    };

    return (
      <div>
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input
          id={id}
          type={type}
          ref={ref}
          onChange={validation != undefined ? handleInputChange : onChange}
          {...(required && { required })}
        />
        {error && <p style={style}>{error}</p>}
      </div>
    );
  }
);

export default TextInput;
