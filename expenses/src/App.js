import React, { useState } from "react";
import Question from "./component/question";
import Form from "./component/Form";

function App() {
  // To define the state
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(0);
  const [viewquestion, updateQuestion] = useState(true);

  return (
    <div className="container">
      <header>
        <h1> Weekly expenses </h1>

        <div className="main-content content">
          {viewquestion ? (
            <Question
              setBudget={setBudget}
              setBalance={setBalance}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
