import React from "react";
import Indent from "./Indent";

export default function String(props) {
  const { keyValue, indentSize, value } = props;

  return (
    <React.Fragment>
      <Indent indentSize={indentSize} />
      <span>
        - {keyValue} : {value}
      </span>
    </React.Fragment>
  );
}
