import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  //   const params = useParams();
  //   console.log(params); // {productId: '2'}
  //     console.log(params.productId); // {productId: '2'}
  const { productId } = useParams();
  console.log(productId);
  const navigate = useNavigate();

  //  filter : 배열을 리턴
  const [targetProduct] = products.filter(
    (product) => product.id === Number(productId)
  );
  console.log(targetProduct); // {potsId, id(판매 번호), name(상품명), body(상세 설명), email(판매자)}

  if (!targetProduct) {
    return <main>존재하지 않는 상품입니다.</main>;
  }
  return (
    <>
      <h1>상세 페이지</h1>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <ul>
        <li>판매 번호 : {targetProduct.id}</li>
        <li>상품명 : {targetProduct.name}</li>
        <li>판매자 : {targetProduct.email}</li>
        <li>상세 설명 : {targetProduct.body}</li>
      </ul>
    </>
  );
}
