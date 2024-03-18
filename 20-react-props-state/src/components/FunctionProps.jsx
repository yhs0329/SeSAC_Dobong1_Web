export function FunctionProps({ name, number, price }) {
  // props = {
  //     name: "사과",
  //     price: 1000,
  //     number:5,
  // }
  //   const { name, number, price } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <hr />
    </div>
  );
}

export function FunctionProps2(props) {
  const { name, number, price } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <div>{props.children}</div>
      <hr />
    </div>
  );
}

export function food(props) {
  const { name, number, price } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>shsihon</p>
      <p>{number}</p>
      <p>{price}원</p>
    </div>
  );
}

// default props 설정하기
// 컴포넌트 이름.defaultProps={정의할 데이터를 객체로 표현}
FunctionProps2.defaultProps = {
  number: 3,
  name: "샤인머스켓",
};

food.defaultProps = {
  price: 15000,
};
