import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleSubmit(evt) {
    evt.preventDefault();
    const data = await axios.post(`http://localhost:3000/${question}`);
    console.log(JSON.stringify(data));
    setAnswer(data.data);
  }

  return (
    <>
      <div className="container">
        <h1>Open AI Developer API Intergration</h1>
        <form>
          <label className="form-label" htmlFor="txtQuestion">
            Please Enter Your Question
          </label>
          <input
            className="form-control"
            type="text"
            id="txtQuestion"
            name="txtQuestion"
            onChange={(evt) => setQuestion(evt.target.value)}
          />
        </form>
        <button className="btn btn-primary mt-3" onClick={(evt) => handleSubmit(evt)}>Ask a Question</button>
        {answer && <h2 className="text-danger">{answer}</h2>}
      </div>
    </>
  );
}

export default App;
