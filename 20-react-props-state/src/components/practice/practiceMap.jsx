import { useState } from "react";

export default function PracticeMap() {
  const [userList, serUserList] = useState([
    { id: 1, name: "코디", email: "codee@test.com" },
    { id: 2, name: "allie", email: "allie@test.com" },
  ]);
  return (
    <div>
      <div>
        <input type="text" placeholder="이름"></input>
        <input type="email" placeholder="이메일"></input>
        <br />
      </div>
      {userList.map((user) => {
        return (
          <h4 key={user.id}>
            {user.name}:{user.email}
          </h4>
        );
      })}
    </div>
  );
}
