import React from "react";
import "./styles.css";

export default function App(props) {
  const person = props;
  const [dude, setDude] = React.useState(person);
  const changeMessage = () => {
    setDude({ ...dude, message: "heyy" });
  };
  return (
    <div className="App">
      <h2>{dude.name}</h2>
      <h3>{dude.age}</h3>
      <h4>{dude.message}</h4>
      <button onClick={changeMessage}>Change message</button>
    </div>
  );
}
