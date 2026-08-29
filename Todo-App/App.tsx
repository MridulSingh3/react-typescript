import TodoApp from "./components/TodoApp";

const App = () => {
  function generateId(): string {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  }
  return (
    <>
      <TodoApp generateId={generateId} />
    </>
  )
}

export default App
