import React from "react";

import JSONArray from "../Components/JSONArray";
import JSONNumber from "../Components/JSONNumber";
import JSONString from "../Components/JSONString";
import JSONObject from "../Components/JSONObject";
import JSONBoolean from "../Components/JSONBoolean";

const ArrayTag = "[object Array]",
  ObjectTag = "[object Object]",
  NumberTag = "[object Number]",
  BooleanTag = "[object Boolean]",
  StringTag = "[object String]";

const CreateObjectFactory = (key, value, indent) => {
  const objectType = Object.prototype.toString.call(value);

  switch (objectType) {
    case ArrayTag:
      return <JSONArray JSONArray={value} indentSize={indent} keyValue={key} />;
    case BooleanTag:
      return <JSONBoolean value={value} indentSize={indent} keyValue={key} />;
    case NumberTag:
      return <JSONNumber value={value} indentSize={indent} keyValue={key} />;
    case StringTag:
      return <JSONString value={value} indentSize={indent} keyValue={key} />;
    case ObjectTag:
      return <JSONObject JSONData={value} indentSize={indent} keyValue={key} />;
  }

  return null;
};

export default CreateObjectFactory;
