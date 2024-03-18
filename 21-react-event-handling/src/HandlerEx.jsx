import { useState } from "react";
function HandlerEx() {
  const [string, setString] = useState("hello, world!");
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("검정색 글씨");
  const change = (newColor, newText) => {
    setColor(newColor);
    setMsg(newText);
  };

  return (
    <div>
      <h3>{string}</h3>
      <br />
      <button
        onClick={() => {
          setString("goodbye, world!");
        }}
      >
        클릭
      </button>
      <br></br>
      <h3 style={{ color: color }}>{msg}</h3>
      <button
        onClick={() => {
          change("red", "빨간색 글씨");
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          change("blue", "파란색 글씨");
        }}
      >
        파란색
      </button>
    </div>
  );
}
export default HandlerEx;
