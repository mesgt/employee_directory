import React from "react";

function Form(props) {
    return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Form;