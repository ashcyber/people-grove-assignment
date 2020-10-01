import React from "react";
import Indent from "./Indent";

export default function Number(props) {
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
