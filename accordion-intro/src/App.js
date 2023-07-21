import React, { useState } from "react";
import data from "./components/data";
import SingleQuestion from "./components/Question"

function App() {

  const [questions,setQuestions] = useState(data);

  return (
    <div>
      <main>
        <div className="container">
          <h3>Questions and Answers about login </h3>

          <section className="info">
            {
              questions.map((question) => {
                return(
                  <SingleQuestion key={question.id} {...question} ></SingleQuestion> 
                )

              })
            }
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
