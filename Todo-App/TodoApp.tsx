import { useState } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export interface Todo {
    id: string;
    name: string;
    completed: boolean;
}
interface TodoAppProps {
    generateId: () => string;
}
const TodoApp = ({ generateId }: TodoAppProps) => {
    const [item, setItem] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    return (
        <>
            <h1>Todo App</h1>

            <TodoForm
                todo={todos}
                setTodos={setTodos}
                item={item}
                setItem={setItem}
                generateId={generateId} />

            <TodoList todo={todos} setTodos={setTodos} />
        </>
    )
}

export default TodoApp
