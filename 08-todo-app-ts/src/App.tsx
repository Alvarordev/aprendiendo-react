import { useState } from 'react';
import './App.css'
import Todos from './components/Todos';

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
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

  return ( 
    <Todos todos={todos}/>
   );
}
 
export default App
