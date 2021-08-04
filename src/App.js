import React, { useRef, useState } from "react";
import useScrollToSomewhere from "./useScrollToSomewhere";
import "./App.css";

export default function App() {
  const [randNumber, setRandNumber] = useState(
    Math.floor(Math.random() * 20001)
  );

  let inputRef = useRef(null);

  const itemScroll = useScrollToSomewhere(inputRef);

  const randScroll = useScrollToSomewhere(randNumber);

  const randScrollHandle = () => {
    setRandNumber(Math.floor(Math.random() * 20001));
    randScroll();
  };

  return (
    <>
      <div className="app">
        <p>Hello</p>
        <p ref={inputRef}>I Am Mahdi Naseri Majd</p>
      </div>
      <button onClick={itemScroll}>Scroll To My Name</button>
      <button onClick={randScrollHandle}>Scroll To Random Place</button>
    </>
  );
}
