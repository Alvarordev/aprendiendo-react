import { type Todo as TodoType } from "../types";

interface Props extends TodoType {
    onRemoveTodo: (id: string) => void
    onChangeTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onChangeTodo }) => {
    return ( 
        <div>
            <input 
                type="checkbox" 
                checked={completed} 
                className="toggle" 
                onChange={(event) => {onChangeTodo({id, completed: event.target.checked})}} 
            />
            <label>{title}</label>
            <button className="destroy" onClick={() => onRemoveTodo(id)}/>
        </div>
     );
}
 
export default Todo;