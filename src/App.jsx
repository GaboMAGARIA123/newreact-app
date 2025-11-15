import { useState, useEffect, use, useRef } from "react";
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

const nameref = useRef();
const surnameref = useRef();

useEffect(() => {
    const element = surnameref.current;
    element.focus();
}, []);


  return (
    <div className="container">
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Hello World" : "Show Hello World"}
      </button>
      {show && <h1 className="title">Hello World</h1>}


      <input type="text" placeholder="enter your name..." ref={nameref} />
      <input type="text" placeholder="enter your surname..." ref={surnameref} />
      {/* <input type="text" placeholder="enter your surname..." autoFocus /> */}
    </div>
  );
}