import React, { useState } from "react";

function Two() {
  const [activeUser, setactiveUser] = useState("Osiris");
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2</h2>
      <p>Active User is: {activeUser}</p>
      <button onClick={() => setactiveUser(activeUser)}>Change Me!</button>
    </div>
  );
}

export default Two;
