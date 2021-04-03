import React from "react";

function Card(props) {
  const [isDark, setTheme] = React.useState(false);
  const changeTheme = () => {
    setTheme(!isDark);
  };
  return (
    <div
      className="Card"
      style={{
        backgroundColor: isDark ? "black" : "red",
        color: isDark ? "white" : "blue",
      }}
    >
      <h1>{props.name}</h1>
      <p>{props.surname}</p>
      <button onClick={changeTheme}>Change color</button>
    </div>
  );
}

export default Card;
