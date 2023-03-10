import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  // 문제점있음.id값이 없음이 의심됌 (빈배열todo로 해결!!)
  const addTodoHandler = () => {
    dispatch(
      addTodo({
        id: todos.length + 1 + "",
        title,
        contents,
        isDone: false,
      })
    );
    setTitle("");
    setContents("");
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo(id));
    // console.log(id, "토글아이디"); 문제없음
  };

  return (
    <StListAll>
      <div>
        <StHeader>
          <div>My Todo List</div>
          <div>React</div>
        </StHeader>
        <StTitleBar>
          <div>
            <span>제목</span>

            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></input>
          </div>
          <div>
            <span>내용</span>
            <input
              onChange={(e) => setContents(e.target.value)}
              value={contents}
            ></input>
          </div>

          <button onClick={addTodoHandler}>작성하기</button>
        </StTitleBar>
      </div>

      <div>
        <div>
          <h1>Working..</h1>
          <StListWrapper>
            {todos
              .filter((todo) => !todo.isDone)

              .map((todo) => {
                return (
                  <StTodoBox
                    key={todo.id}
                    style={{ border: "1px solid black", width: "300px" }}
                  >
                    <Link to={`/${todo.id}`}>
                      <div>상세보기</div>
                    </Link>
                    <h2>{todo.title}</h2>
                    <div>{todo.contents}</div>
                    <button onClick={() => deleteTodoHandler(todo.id)}>
                      삭제하기
                    </button>
                    <button onClick={() => toggleTodoHandler(todo.id)}>
                      완료하기
                    </button>
                  </StTodoBox>
                );
              })}
          </StListWrapper>
        </div>
      </div>
      <div>
        <div>
          <h1>Complete..</h1>
          <StListWrapper>
            {todos
              .filter((todo) => todo.isDone)
              .map((todo) => {
                return (
                  <StTodoBox
                    key={todo.id}
                    style={{ border: "1px solid black", width: "300px" }}
                  >
                    <Link to={`/${todo.id}`}>
                      <div>상세보기</div>
                    </Link>

                    <h2>{todo.title}</h2>
                    <div>{todo.contents}</div>
                    <button onClick={() => deleteTodoHandler(todo.id)}>
                      삭제하기
                    </button>
                    <button onClick={() => toggleTodoHandler(todo.id)}>
                      취소하기
                    </button>
                  </StTodoBox>
                );
              })}
          </StListWrapper>
        </div>
      </div>
    </StListAll>
  );
};

export default Home;

// CSS
// Heder
const StHeader = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;
// 추가하기 bar
const StTitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
// todo박스
const StTodoBox = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;
// TodoList 전체
const StListAll = styled.div`
  padding: 0 24px;
`;
// list 별 CSS
const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
