import React, { useState } from "react";
import JSONObject from "./Components/JSONObject";
import "./App.css";

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function App() {
  const [jsonInput, setJsonInput] = useState("");
  const [validJsonInput, setValidJsonInput] = useState({});

  const handleInputChange = (e) => setJsonInput(e.target.value);

  const handleParse = () => {
    if (isJson(jsonInput)) {
      setValidJsonInput(JSON.parse(jsonInput));
    } else {
      alert("Not a valid JSON Input String");
    }
  };

  return (
    <div className="container">
      <button onClick={() => handleParse()}>JSON Parse</button>
      <div className="App">
        <div className="JsonInput">
          <h2>Enter Input</h2>
          <textarea
            placeholder="enter a valid json here..."
            width="100%"
            value={jsonInput}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="Viewer">
          <h2>JSON Viewer</h2>
          <div>
            <JSONObject isRoot={true} JSONData={validJsonInput} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
