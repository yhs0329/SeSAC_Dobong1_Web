import { ClassState } from "./components/ClassProps";

function App() {
  return (
    <div className="App">
      <h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주"></ClassProps>
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치"></ClassProps>
      <ClassProps2
        name="포비"
        color="beige"
        nickname="곰"
        // bgColor="black"
      ></ClassProps2>
      <FunctionProps name="사과" number={5} price={1000}></FunctionProps>
      <FunctionProps2 price={50000} />
      <FunctionProps2>여기가 children props라고 합니다.</FunctionProps2>

      <h1>연습문제</h1>
    </div>
  );
}

export default App;
