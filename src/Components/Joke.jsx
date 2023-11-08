import React, { useState } from "react";
import "../styles/joke.css";

export default function Joke() {
  const [joke, setJoke] = useState({
    setUp: "",
    punchline: "",
  });

  const [showElement, setShowElement] = useState(false);

  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) =>
        setJoke((prevState) => {
          return {
            ...prevState,
            setUp: data.setup,
            punchline: data.punchline,
          };
        })
      );
    setShowElement((prevState) => {
      prevState === true ? false : true;
    });
  };

  return (
    <div className="joke_container">
      <h2 id="setup">{joke.setUp}</h2>

      {showElement && <h2 id="punchline">{joke.punchline}</h2>}

      <button id="joke_btn" className="btn" onClick={getJoke}>
        Get Joke
      </button>
      <button
        id="show_punchline"
        className="btn btn_white"
        onClick={() => setShowElement(!showElement)}
      >
        {showElement ? "Hide Punchline" : "Show Punchline"}
      </button>
    </div>
  );
}

// const [showElement, setShowElement] = useState(false);

// return (
//   <div>
//     <button onClick={() => setShowElement(!showElement)}>Toggle Element</button>
//     {showElement && <div>This element is displayed when showElement is true.</div>}
//   </div>
// );
// };
