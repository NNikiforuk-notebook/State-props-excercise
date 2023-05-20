import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import PizzaCalculator from "./components/PizzaCalculator";
import "./style.css";

export default function App() {
const [userName, setUserName] = useState("Natalia");

const handleInput = e => {
  setUserName(e.target.value)
}

  return (
    <div>
      <Navigation userName={userName}  />
      <main>
        <div className="userNameSection">
          <label>Your name: </label>
          <input onChange={handleInput} value={userName} />
        </div>
        <Title userName={userName} />
        <PizzaCalculator userName={userName} />
      </main>
    </div>
  );
}
