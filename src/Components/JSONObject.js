import React, { useState } from "react";
import Indent from "./Indent";
import CreateObjectFactory from "../helper/index";

const ButtonSign = Object.freeze({
  plus: "+",
  minus: "-",
});

const JSONToArray = (jsonObject) => {
  let arr = [];
  for (let key in jsonObject) {
    arr.push({ key, value: jsonObject[key] });
  }
  return arr;
};

export default function JSONObject(props) {
  const [visibility, setVisiblity] = useState(true);
  const { indentSize = 0, keyValue, JSONData = {}, isRoot } = props;

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
        {"{} "} {isRoot ? "" : keyValue}
      </span>
      {visibility && (
        <div>
          {JSONToArray(JSONData).map((obj, idx) => (
            <div key={idx}>
              {CreateObjectFactory(obj.key, obj.value, indentSize + 1)}
            </div>
          ))}
        </div>
      )}
    </span>
  );
}
