import React from "react";

const myStyle = {
    color: "white",
    backgroundColor: "darkblue",
    textAlign: "center",
    fontSize: 50
}

function Header() {
    return (
        <div style={myStyle}>
            Welcome to Your Employee Directory
        </div>);
}

export default Header;
