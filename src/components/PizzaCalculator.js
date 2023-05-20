import React from "react";
import PizzaQuestion from "./PizzaQuestion";
import PizzaForm from "./PizzaForm";
import PizzaAnswer from "./PizzaAnswer";

export default function PizzaCalculator({ userName }) {
  return (
    <section>
      <PizzaQuestion userName={userName} />
      <PizzaForm />
      <hr />
      <PizzaAnswer userName={userName} />
    </section>
  );
}
