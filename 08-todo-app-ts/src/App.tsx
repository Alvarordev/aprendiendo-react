import { useState } from 'react';
import Todos from './components/Todos';
import { FilterValue, type Todo as TodoType } from './types';
import Footer from './components/Footer';
import { TODO_FILTERS } from './consts';
import Header from './components/Header';

const mockTodos = [
  {
    id: '1',
    title: 'Pasea a Nala por la tarde',
    completed: false,
  },
  {
    id: '2',
    title: 'Avanzar el curso de React de Midudev',
    completed: true,
  },
  {
    id: '3',
    title: 'Hacer 1 hora de FreeCodeCamp',
    completed: true,
  },
  {
    id: '4',
    title: 'Ganar un dotita',
    completed: false,
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterValue, setFilterValue] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  
  const handleFilterChange = (filter: FilterValue) => {
    setFilterValue(filter)
  }

  const handleClearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleNewTodo = (title: string) => {
    const newTodos = [...todos, {id: crypto.randomUUID(), title, completed: false}]
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterValue === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }

    if (filterValue === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }

    return true
  })

  const activeCount = todos.filter(todo => !todo.completed).length

  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className='todoapp'>
      <Header saveTodo={handleNewTodo}/>
      <Todos onRemoveTodo={handleRemove} onChangeTodo={handleChangeTodo} todos={filteredTodos}/>
      <Footer 
        activeCount={activeCount} 
        completedCount={completedCount} 
        filterSelected={filterValue} 
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
      />
    </div>
   );
}
 
export default App
