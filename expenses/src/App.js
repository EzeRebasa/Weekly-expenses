import React from "react";
import Question from "./component/question";

function App() {
  return (
    <div className="container">
      <header>
        <h1> Weekly expenses </h1>

        <div className="main-content content">
          <Question />
        </div>
      </header>
    </div>
  );
}

export default App;
