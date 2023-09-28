import { type Todo as TodoType, type ListOfTodos } from "../types";
import Todo from "./Todo";

interface Props {
    todos: ListOfTodos
    onRemoveTodo: (id: string) => void
    onChangeTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onChangeTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo id={todo.id} title={todo.title} completed={todo.completed} onRemoveTodo={onRemoveTodo} onChangeTodo={onChangeTodo}/>
                </li>
            ))}
        </ul>
    );
}

export default Todos;