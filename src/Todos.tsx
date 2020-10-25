import React, { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(data);
    })();
  }, []);

  const rendered = todos.map(({ id, title }) => (
    <li style={{ listStyleType: "none" }} key={id}>
      {title}
    </li>
  ));

  return <ul>{rendered}</ul>;
};

export default Todos;
