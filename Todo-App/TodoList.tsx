import type {
    Dispatch,
    SetStateAction,
} from "react";

import type { Todo } from "./TodoApp";

interface TodoListProps {
    todo: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[]>>;
}
const TodoList = ({ todo, setTodos }: TodoListProps) => {
    const toggleTodo = (id: string) => {
        setTodos(
            todo.map((item) => item.id === id ? {
                ...item,
                completed: !item.completed
            } : item)
        )
    }
    const deleteTodo = (id: string) => {
        setTodos(
            todo.filter((item) => item.id !== id)
        );
    };
    const editTodo = (id: string) => {
        const currentTodo = todo.find((item) => item.id === id);
        if (!currentTodo) {
            return;
        }

        const newName = prompt(
            "Edit Todo",
            currentTodo.name
        );

        if (newName === null) {
            return;
        }

        if (newName.trim() === "") {
            return;
        }
        setTodos(
            todo.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        name: newName.trim()
                    }
                    : item
            )
        );
    }
    return (
        <>
            <div>
                {
                    todo.length === 0 ? (
                        <p>No Todo Yet!</p>
                    ) : (
                        todo.map((item) => (
                            <div key={item.id}>
                                <h3 style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                                    {item.name}
                                </h3>
                                <button onClick={() => toggleTodo(item.id)}>{
                                    item.completed ? "Undo" : "Completed"
                                }
                                </button>
                                <button onClick={() => editTodo(item.id)}>Edit</button>

                                <button onClick={() => deleteTodo(item.id)}>
                                    Delete
                                </button>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    )
}

export default TodoList
