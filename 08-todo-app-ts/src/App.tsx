import { useState } from 'react';
import Todos from './components/Todos';
import { type Todo as TodoType } from './types';

const mockTodos = [
  {
    id: '1',
    title: 'Pasea a Nala por la manana',
    completed: false,
  },
  {
    id: '2',
    title: 'todo 2',
    completed: true,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: true,
  },
  {
    id: '4',
    title: 'todo 4',
    completed: false,
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleChangeTodo = ({id, completed}: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <h1>Todo App</h1>
      <Todos onRemoveTodo={handleRemove} onChangeTodo={handleChangeTodo} todos={todos}/>
    </div>
   );
}
 
export default App
