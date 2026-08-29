import type {
    Dispatch,
    SetStateAction,
    FormEvent,
} from "react";

import type { Todo } from "./TodoApp";

interface TodoFormProps {
    todo: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[]>>;
    item: string;
    setItem: Dispatch<SetStateAction<string>>;
    generateId: () => string;
}

const TodoForm = ({ todo, setTodos, item, generateId, setItem }: TodoFormProps) => {
    const addTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (item.trim() === '') {
            return;
        }
        const newTodo = {
            id: generateId(),
            name: item,
            completed: false
        }
        setTodos((prevTodo) => [...prevTodo, newTodo]);
        setItem("");
    }
    return (
        <>
            <div>
                <div>
                    <form onSubmit={addTodo}>
                        <input type="text" placeholder='Enter Todo' value={item} onChange={(e) => setItem(e.target.value)} />
                        <button type="submit">Add Todo</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TodoForm
