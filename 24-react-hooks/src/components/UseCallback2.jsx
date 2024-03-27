import { useCallback } from "react";
import { useState } from "react";
export default function UseCallback2() {
  const [text, setText] = useState("");
  // input 태그이ㅡ onChange 이벤트는 업데이트가 잦은 state가 있음
  // 재 렌더링 될 때마다 새롭게 이벤트 핸들러 함수가 생성
  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };

  // 반복되는 이벤트 핸들러 함수 >> useCallback이용 메모리제이션
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <>
      <input type="text" onChange={onChangeText} />
      <p>작성한 값:{text}</p>
    </>
  );
}
