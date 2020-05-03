import React, { useState } from "react";
import Question from "./component/question";

function App() {
  // To define the state
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(0);

  return (
    <div className="container">
      <header>
        <h1> Weekly expenses </h1>

        <div className="main-content content">
          <Question setBudget={setBudget} setBalance={setBalance} />

          <div className="row">
			  <div className="one-half column">
				  1
			  </div>
			  <div className="one-half column">
				  2
			  </div>
		  </div>
        </div>
      </header>
    </div>
  );
}

export default App;
