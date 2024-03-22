import { Children } from "react";
import LifeCycleClass from "./components/LifeCycleClass";
import Prac1 from "./components/Prac1";
import Prac2 from "./components/Prac2";
import { RefClass1 } from "./components/RefClass";
import { RefClass2 } from "./components/RefClass";
import { RefFunction1, RefFunction2 } from "./components/RefFunction";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <h1>ref</h1>
      {/* <RefClass1 />
      <RefClass2 />
      <RefFunction1 />
      <RefFunction2 /> */}
      <h1>life cycle</h1>
      {/* <LifeCycleClass /> */}
      <h3>practice1</h3>
      {/* <Prac1 /> */}
      {/* <Prac2 /> */}
      <Container>
        <Prac2 />
      </Container>
    </div>
  );
}

export default App;
