import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./components/CustomButton";
import User from "./components/Users";
import Header from "./components/Header";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, title: "리엑트 공부", contents: "어렵네요", isDone: true },
    { id: 2, title: "리엑트 공부", contents: "무섭네요", isDone: false },
  ]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // 추가버튼 핸들러
  const addUserHandler = (event) => {
    const newUser = {
      id: users.length + 1,
      title: title,
      contents: contents,
      isDone: false,
    };
    //요게 초기화
    setTitle("");
    setContents("");
    setUsers([...users, newUser]);
  };
  //삭제버튼 핸들러
  const deleteUserHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  //완료버튼핸들러
  const completeListHandler = (userId) => {
    const newUsers = users.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          isDone: !user.isDone,
        };
      } else {
        return { ...user };
      }
    });
    setUsers(newUsers);
  };

  return (
    // layout이 안먹음
    <div className="layout">
      <Header />
      {/* 클래스네임으로 꾸미기가능 여기부터 제목 */}
      {/* 여기에 div가 아니라 <form>주고 className을 titlebar-style로 줬더니 에러발생 */}
      <div className="bar-style">
        <div className="titlebar-style">
          <label>제목</label>
          <input
            value={title}
            placeholder="제목을 입력해주세요"
            // 인풋 이벤트로 들어온 입력 값을 title 값으로 업데이트
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>내용</label>
          <input
            value={contents}
            placeholder="내용을 입력해주세요"
            // 인풋 이벤트로 들어온 입력 값을 contents의 값으로 업데이트
            onChange={(e) => setContents(e.target.value)}
          />
        </div>
        <CustomButton color="green" onClick={addUserHandler}>
          추가하기
        </CustomButton>
      </div>
      <h1>Working..🔥</h1>

      <div className="app-style">
        {users.map((user) => {
          if (user.isDone === false) {
            return (
              <User
                user={user}
                key={user.id}
                setUsers={setUsers}
                addUserHandler={addUserHandler}
                handleDelete={deleteUserHandler}
                completeListHandler={completeListHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <h1>Done..!🎉</h1>

      <div className="Done-style">
        {users.map((user) => {
          if (user.isDone) {
            return (
              <User
                user={user}
                key={user.id}
                setUsers={setUsers}
                handleDelete={deleteUserHandler}
                completeListHandler={completeListHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default App;
