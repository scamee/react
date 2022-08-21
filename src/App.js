import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する。
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
  };

  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Todo1", completed: false },
  ]);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
