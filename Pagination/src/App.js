import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);

  const totalPages = Math.ceil(todos.length / todosPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  const visibleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const prevButton = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextButton = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // console.log(visibleTodos);
  return (
    <>
      <label>
        Todo's Per Page:
        <select
          value={todosPerPage}
          onChange={(e) => setTodosPerPage(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      {visibleTodos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      <br />
      <div className="pagination">
        <div className="pages">
          {pages.map((page) => {
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "active" : ""}
              >
                {page}
              </button>
            );
          })}
        </div>
        <br />
        <div className="prevAndNext">
          <button onClick={prevButton}>Prev</button>
          <button onClick={nextButton}>Next</button>
        </div>
      </div>
    </>
  );
}
