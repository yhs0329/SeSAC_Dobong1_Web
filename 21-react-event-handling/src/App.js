import Counter from "./Counter";
import SynthecticEvent from "./SynthecticEvent";
import HandlerEx from "./HandlerEx";
import EntirePractice from "./practice/EntirePractice";

function App() {
  return (
    <div className="App">
      <h1>합성 이벤트</h1>
      <SynthecticEvent></SynthecticEvent>
      <Counter></Counter>
      <HandlerEx></HandlerEx>
      <hr />
      <h1 style={{ textAlign: "center" }}>실습문제</h1>
      <EntirePractice />
    </div>
  );
}

export default App;
