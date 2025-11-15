import { useState, useEffect } from "react";
import "./app.css";

export default function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("Hello World mounted");
  }, []);

useEffect(() => {
  window.testNumber = (n) => {
    if (typeof n === "number") {
      console.log("hello world");
    }
  };
}, []);


  return (
    <div className="container">
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Hello World" : "Show Hello World"}
      </button>

      {show && <h1 className="title">Hello World</h1>}
    </div>
  );
}