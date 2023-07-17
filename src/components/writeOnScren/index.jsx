import React from "react";
import { useEffect, useState } from "react";

const WriteOnScreen = (props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      writeOnScreen(props.text);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const writeOnScreen = (text, i = 0) => {
    text.replace(";", <br />);
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        writeOnScreen(text, i + 1);
      }, 40);
    }
  };

  return <>{text}</>;
};

export default WriteOnScreen;
