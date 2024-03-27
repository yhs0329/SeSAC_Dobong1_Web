import { useNavigate, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function NewPage() {
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useSearchParams();
  const search = queryParams.get("name");
  const { name } = useParams();
  return (
    <main className={"NewPage"}>
      <p>학생 이름은 {name} 입니다.</p>
      {search && <p> 실제 학생 이름은 {search} 입니다.</p>}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </main>
  );
}
