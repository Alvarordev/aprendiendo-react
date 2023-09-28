import CreateTodo from "./CreateTodo";

interface Props {
    saveTodo: (title: string) => void
}

const Header: React.FC<Props> = ({saveTodo}) => {
    return (
        <header className="header">
            <h1>Todo App</h1>
            <CreateTodo saveTodo={saveTodo} />
        </header>
     );
}
 
export default Header;