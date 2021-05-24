import React, { useState } from "react";

function Three() {
  const [year, setYear] = useState("1995");
  const [type, setType] = useState("Mercedes");
  const [used, setUsed] = useState("New Car");

  function Update() {
    setType("Benz");
    setUsed("New Car");
    setYear("2018");
  }

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 3</h2>
      <h3>Car Spec is:</h3>
      <ul>
        <li>{type}</li>
        <li>{year}</li>
        <li>{used}</li>
      </ul>
      <button onClick={Update}>Swap Car!</button>
    </div>
  );
}

export default Three;
