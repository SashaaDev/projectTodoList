import Form from "./components/FormComponent.tsx";
import Todos from "./components/Todos.tsx";
import Actions from "./components/TodoActions.tsx";
import TodoProvider from "./components/TodoProvider.tsx";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Ваші задачі в одному місці!</h1>
        <Todos />
        <div className="add_tasks">
          <h2>Є ще задачі? Додайте їх прямо зараз.</h2>
          <Form />
          <Actions />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
