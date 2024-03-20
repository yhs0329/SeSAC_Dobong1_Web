import { RefClass1 } from "./components/RefClass";
import { RefClass2 } from "./components/RefClass";
import { RefFunction1, RefFunction2 } from "./components/RefFunction";

function App() {
  return (
    <div className="App">
      <h1>ref</h1>
      <RefClass1 />
      <RefClass2 />
      <RefFunction1 />
      <RefFunction2 />
    </div>
  );
}

export default App;
