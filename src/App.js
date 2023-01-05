//실패!!

// import React from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// const App = () => {
//   // input값을 state로 관리
//   const [title, setTitle] = useState("");
//   const [contents, setContents] = useState("");
//   // 초기값
//   const [todo, setTodos] = useState([
//     { id: 1, title: "리엑트 공부", contents: "어렵네요", isDone: true },
//     { id: 2, title: "리엑트 공부", contents: "무섭네요", isDone: false },
//   ]);
//   // newTodo정의해야함.
//   setTodos([...todo, newTodo]);

//   // const todos = useSelector((state) => state.todoList.todos);

//   // const dispatch = useDispatch();

//   //추가하기버튼
//   const addTodoHandler = (event) => {
//     const newTodo = {
//       id: todo.length + 1,
//       title: title,
//       contents: contents,
//       isDone: false,
//     };
//     // 기본값 초기화
//     setTitle("");
//     setContents("");

//     return (
//       <div>
//         <div>
//           <div>
//             <div>My Todo List</div>
//             <div>React</div>
//           </div>
//           <div>
//             <label>제목</label>
//             <input
//               type="text"
//               value={title}
//               placeholder="제목을 입력해주세요"
//               // 인풋 이벤트로 들어온 입력 값을 title 값으로 업데이트
//               // input에 바로 onChange를 때려박는게 랜더링이 많이 발생되어서 안좋은 방법이다. ( 값이 변경될때마다 랜더링이 발생/ 추가하기버튼안눌러도 )
//               // onChange는 이벤트를 통해 타겟벨류값을 setTitle에 담는다.
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <label>내용</label>
//             <input
//               type="text"
//               value={contents}
//               placeholder="내용을 입력해주세요"
//               // 인풋 이벤트로 들어온 입력 값을 contents의 값으로 업데이트
//               onChange={(e) => setContents(e.target.value)}
//             />
//           </div>
//           <CustomButton color="green" onClick={addUserHandler}>
//             추가하기
//           </CustomButton>
//         </div>
//         <h1>Working..🔥</h1>
//         <div>
//           {/* map안의 user는 users안에 있는 객체 하나 */}
//           {todo.map((todo) => {
//             if (todo.isDone === false) {
//               return (
//                 // 결과적으로 만들었던 함수,정보 연결시켜주는거 ( props방식 )
//                 <Todo
//                   todo={todo}
//                   key={todo.id} // 본문에서 map을 통해 div를 만들때 key값이 있어야한다.
//                   handleDelete={deleteTodoHandler}
//                   completeListHandler={completeListHandler}
//                 />
//               );
//             } else {
//               return null;
//             }
//           })}
//         </div>
//         <h1>Done..!🎉</h1>
//         <div>
//           {todos.map((todo) => {
//             // 조건 자체가 true라서 ===true는 생략.
//             if (todo.isDone) {
//               return (
//                 <Todo
//                   todo={todo}
//                   key={todo.id} // 본문에서 map을 통해 div를 만들때 key값이 있어야한다.
//                   handleDelete={deleteTodoHandler}
//                   completeListHandler={completeListHandler}
//                 />
//               );
//             } else {
//               return null;
//             }
//           })}
//         </div>
//       </div>
//     );
//   };
// };

// export default App;

// // 여기서부터 섹션영상으로 다시 만들어보기
// // 기본뼈대

// import "./App.css";
// import { useState } from "react";

// function App() {
//   return (
//     <div>
//       <div>
//         <div>
//           <span>제목</span>
//           <input></input>
//         </div>
//         <div>
//           <span>내용</span>
//           <input></input>
//         </div>
//         <button>작성하기</button>
//       </div>
//       <div>
//         <div style={{ border: "1px solid black" }}>
//           <h1>Working..</h1>
//           <div>
//             <h2>리엑트 공부하기</h2>
//             <div>공부하기</div>
//             <button>삭제하기</button>
//             <button>완료하기</button>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div style={{ border: "1px solid black" }}>
//           <h1>Complete..</h1>
//           <div>
//             <h2>리엑트 공부하기</h2>
//             <div>공부하기</div>
//             <button>삭제하기</button>
//             <button>취소하기</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// 여기부터 강의영상완성본

// import "./App.css";
// import { useState } from "react";

// function App() {
//   // 순서1 useState사용
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   // 순서4 todolist 배열 만들기 // useState에 [] 빈배열넣기
//   const [todoList, setTodoList] = useState([]);
//   // 순서5 추가하기(addTodo) 할때마다 배열넣게끔
//   const addTodo = () => {
//     const todo = {
//       // 순서9 id값도 잘 넣는방법있지만 일단 .length로
//       // id : 1,
//       id: todoList.length,
//       // 순서8 title,content를 input으로 받은값을 넣어주기
//       // title : '리액트',
//       // content : '공부하기',
//       title: title,
//       content: content,
//       isComplete: false,
//     };
//     // 순서6 todoList만들었으니 setTodoList 만들어야함
//     // 기존의 ...todoList(복사해와서)에 새배열 todo 붙이기
//     setTodoList([...todoList, todo]);
//   };
//   // 순서12 삭제하기 기능만들기
//   // filter를 돌려서 true인 애들로 새로운배열 todos에 넣기
//   // todo의 id를 받아와서 id로 돌린다.
//   // filter해서 todos가 되었고 onClick할때 id를 넘기면 기능이 작동하게된다.
//   const deleteTodo = (id) => {
//     const _todos = todoList.filter((p) => p.id !== id);
//     // 순서13 setTodoList로 _todos배열을 만들고 !== 한것들만 filter하고 삭제되지 않은것들만 남는다.
//     // todoList를 filter했을때 id가 같지 않은것들(삭제한것들)은 _todos라는 안보이는 배열에 넣고 나머지를 보여주게끔한다.
//     setTodoList(_todos);
//     // 여기까지가 삭제기능 만들기
//   };
//   // 순서15 완료하기버튼에 들어가는 기능 만들기
//   // 삭제하기 기능처럼 id를 받아와서 삭제할 게시물을 특정시킨다.
//   // todoList에 map을 돌리고 조건문사용해서 ...todo.id와 id가 같으면
//   // 기존 todo배열을 ... 로 복사해오고 isComlete(완료버튼)를 !todo.isComplete(취소버튼)으로 바꿔라
//   // !(느낌표) 는 반대개념이라 완료에서 취소로 변경된다.
//   // else(아니면) todo를 반환해라
//   const toggleTodo = (id) => {
//     const _todo = todoList.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, isComplete: !todo.isComplete };
//       } else {
//         return todo;
//       }
//     });
//     setTodoList(_todo);
//   };
//   return (
//     <div>
//       <div>
//         <div>
//           <span>제목</span>
//           {/* 순서2 input에 onChange연결, 순서3 value값 지정 */}
//           <input
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           ></input>
//         </div>
//         <div>
//           <span>내용</span>
//           <input
//             onChange={(e) => setContent(e.target.value)}
//             value={content}
//           ></input>
//         </div>
//         {/* 순서7 버튼에 만든 addTodo연결 */}
//         <button onClick={addTodo}>작성하기</button>
//       </div>
//       <div>
//         <div>
//           <h1>Working..</h1>
//           {/* 순서17 갑자기 방법변경.순서10과 순서17을 합침 */}
//           {todoList
//             .filter((todo) => !todo.isComplete)
//             .map((todo) => {
//               /* 순서10 화면에서 랜더링(보기)위해 map돌리기
//           {todoList.map((todo) => { */

//               return (
//                 // 순서 11 div에 key넣기(고유한값) + map의 return값 작성 + 스타일옮기기+ width추가 // 여기까지하면 추가하기 기능 완성
//                 <div
//                   key={todo.id}
//                   style={{ border: "1px solid black", width: "300px" }}
//                 >
//                   <h2>{todo.title}</h2>
//                   <div>{todo.content}</div>
//                   {/* 순서14 삭제하기버튼에 기능연결하기 */}
//                   <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
//                   {/* 순서16 완료하기버튼에 toggle기능 연결하기 */}
//                   <button onClick={() => toggleTodo(todo.id)}>완료하기</button>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//       <div>
//         <div>
//           <h1>Complete..</h1>
//           {/* 순서18 원래있던 div위치에 순서17을 복사 붙여넣기하기 */}
//           {/* <div>
//             <h2>리엑트 공부하기</h2>
//             <div>공부하기</div>
//             <button>삭제하기</button>
//             <button>취소하기</button>
//           </div> */}
//           {todoList
//             // 순서19 !는 지우기(완료된todo이기때문에)
//             .filter((todo) => todo.isComplete)
//             .map((todo) => {
//               return (
//                 <div
//                   key={todo.id}
//                   style={{ border: "1px solid black", width: "300px" }}
//                 >
//                   <h2>{todo.title}</h2>
//                   <div>{todo.content}</div>
//                   <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
//                   <button onClick={() => toggleTodo(todo.id)}>완료하기</button>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// 시작!
import React from "react";
import Router from "./chared/Router";

function App() {
  return <Router />;
}

export default App;
