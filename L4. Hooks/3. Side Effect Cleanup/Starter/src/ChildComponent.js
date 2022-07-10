import React, { useState, useEffect } from "react";

function ChildComponent() {
  const [color, setColor] = useState("red");
  let timer = null;

  useEffect(() => {
    timer = setTimeout(() => setColor("green"), 3000);

    return () => timer !== null && clearTimeout(timer);
  });

  return <p style={{ color }}>{color}</p>;
}
export default ChildComponent;
