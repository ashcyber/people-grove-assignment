import React, { useState } from "react";
import CreateObjectFactory from "../helper/index";
import Indent from "./Indent";

const ButtonSign = Object.freeze({
  plus: "+",
  minus: "-",
});

export default function Array(props) {
  const [visibility, setVisiblity] = useState(true);
  const { indentSize = 0, keyValue, JSONArray = [], isRoot } = props;

  const toggleVisible = () => {
    setVisiblity(!visibility);
  };
  return (
    <span>
      <Indent indentSize={indentSize} />
      <button onClick={() => toggleVisible()}>
        {visibility ? ButtonSign.minus : ButtonSign.plus}
      </button>{" "}
      <span>
        {"[] "} {isRoot ? "" : keyValue}
      </span>
      {visibility && (
        <div>
          {JSONArray.map((obj, idx) => (
            <div key={idx}>{CreateObjectFactory(idx, obj, indentSize + 1)}</div>
          ))}
        </div>
      )}
    </span>
  );
}
