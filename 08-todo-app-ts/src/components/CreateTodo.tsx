import { useState } from "react";

interface Props {
    saveTodo: (title: string) => void
}

const CreateTodo: React.FC<Props> = ({saveTodo}) => {
    const [inputValue, setInputValue] = useState('')

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter' && inputValue !== '') {
            saveTodo(inputValue)
            setInputValue('')
        }
    }

    return ( 
        <input 
            className="new-todo" 
            value={inputValue} 
            onChange={e => {setInputValue(e.target.value)}}
            onKeyDown={handleKeyDown} 
            type="text" 
            placeholder="Agrega un nuevo pendiente"
        />
     );
}
 
export default CreateTodo;