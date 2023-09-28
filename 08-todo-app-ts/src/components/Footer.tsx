import { FilterValue } from "../types";
import Filters from "./Filters";

interface Props {
    handleFilterChange: (filter: FilterValue) => void
    activeCount: number
    completedCount: number
    onClearCompleted: () => void
    filterSelected: FilterValue
}

const Footer: React.FC<Props> = ({activeCount, completedCount, filterSelected, handleFilterChange, onClearCompleted}) => {
    return ( 
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount} {activeCount === 1 ? 'tarea pendiente' : 'tareas pendientes'} </strong>
            </span>

            <Filters filterSelected={filterSelected} handleFilterChange={handleFilterChange} />

            {completedCount > 0 && <button className="clear-completed" onClick={onClearCompleted}>Borrar Completados</button>}
        </footer>
     );
}
 
export default Footer;