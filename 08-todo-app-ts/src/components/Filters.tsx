import { TODO_FILTERS } from "../consts";
import { FilterValue } from "../types";

const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: { literal: 'All', href: `/?filter=${TODO_FILTERS.ALL}` },
    [TODO_FILTERS.ACTIVE]: { literal: 'Active', href: `/?filter=${TODO_FILTERS.ACTIVE}` },
    [TODO_FILTERS.COMPLETED]: { literal: 'Completed', href: `/?filter=${TODO_FILTERS.COMPLETED}` }
  } as const
  

interface Props {
    filterSelected: FilterValue
    handleFilterChange: (filter: FilterValue) => void
}

const Filters: React.FC<Props> = ({filterSelected, handleFilterChange}) => {

    const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        handleFilterChange(filter)
    }
    
    
    return ( 
        <ul className="filters">
            {Object.entries(FILTERS_BUTTONS).map(([key, {literal, href}]) => {
                const isSelected = key === filterSelected
                const classname = isSelected ? 'selected' : ''

                return (
                    <li key={key}>
                        <a href={href} className={classname} onClick={handleClick(key as FilterValue)}>
                            {literal}
                        </a>
                    </li>
                )
            })}
        </ul>
     );
}
 
export default Filters;