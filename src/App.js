import React from "react";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import data from "./data.js"

export default function App() {
  const cardElement = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div>
      <Navbar />
      <section className="Card-Section">
      {cardElement}
      </section>
    </div>
  );
}
