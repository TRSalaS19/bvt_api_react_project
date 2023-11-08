import { useState } from "react";
import Joke from "./Components/Joke";
import "./styles/app.css";

export default function App() {
  return (
    <div className="app_container">
      <Joke />
    </div>
  );
}
