function SynthecticEvent() {
  function SynthecticEvent(e) {
    console.log(e);
  }
  function printInputValue(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <button onClick={SynthecticEvent}>클릭 이벤트 콘솔에 찍기</button>
      <br />
      <input type="text" placeholder="입력" onChange={printInputValue}></input>
    </div>
  );
}

export default SynthecticEvent;
