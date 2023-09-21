// eslint-disable-next-line react/prop-types
const Header = ({ children }) => {
    return ( 
        <div>
            <h1>React Shop 🛒</h1>
            { children }
        </div>
     );
}
 
export default Header;