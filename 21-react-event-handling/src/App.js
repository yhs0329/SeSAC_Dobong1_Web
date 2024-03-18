import Counter from "./Counter";
import SynthecticEvent from "./SynthecticEvent";
import HandlerEx from "./HandlerEx";

function App() {
  return (
    <div className="App">
      <h1>합성 이벤트</h1>
      <SynthecticEvent></SynthecticEvent>
      <Counter></Counter>
      <HandlerEx></HandlerEx>
    </div>
  );
}

export default App;
