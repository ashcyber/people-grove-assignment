import React from "react";

const Space = () => <span>&nbsp;&nbsp;</span>;

export default function Indent(props) {
  const { indentSize = 0 } = props;

  const spaceArray = [];

  for (let i = 0; i < indentSize; i++) {
    spaceArray.push(<Space key={i} />);
  }

  return <React.Fragment>{spaceArray}</React.Fragment>;
}
