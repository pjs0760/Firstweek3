// src/redux/modules/todos.js

// // Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const GET_TODO_ID = "GET_TODO_ID";
// // Action Creator

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

export const getTodoID = (payload) => {
  return {
    type: GET_TODO_ID,
    payload,
  };
};

// // Initial State
const initialState = {
  todos: [
    {
      id: "1",
      title: "리엑트 공부",
      contents: "어렵네요",
      isDone: true,
    },
    {
      id: "2",
      title: "리엑트 공부",
      contents: "무서워요",
      isDone: false,
    },
  ],
  // todo 배열을 만들어야 Link에서 제대로 돌아가기가 가능(map에서 id값 참조못함을 방지) + useEffect를 좀 확실히 알고넘어갈 필요성있음!!!!
  todo: [
    {
      id: 0,
      title: "",
      contents: "",
      isDone: false,
    },
  ],
};
//
// // Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    case GET_TODO_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };

    default:
      return state;
  }
};

// // export defualt reducer
export default todos;
