import { type Todo } from "../types";

type Props = Todo

const Todo: React.FC<Props> = ({ id, title, completed }) => {
    return ( 
        <div>
            <input 
                type="checkbox" 
                checked={completed} 
                className="toggle" 
                onChange={() => {}} 
            />
            <label>{title}</label>
        </div>
     );
}
 
export default Todo;