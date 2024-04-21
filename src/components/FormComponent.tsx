import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/TodoContext.ts";
import { useContext } from "react";
import Button from "./ButtonComponent.tsx";
const Form = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo({ id: uuidv4(), title, completed: false });
    setTitle("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="form" name="form" id="form">
      <input
        type="text"
        placeholder="Назва задачі"
        value={title}
        onChange={handleChange}
      />
      <Button type="submit">Зберегти</Button>
    </form>
  );
};

export default Form;
