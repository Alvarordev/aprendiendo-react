export const Square = ({ children, index, isSelected, updateBoard }) => {
    const handleClick = () => {
      updateBoard(index);
    };
  
    const className = `square ${isSelected ? "is-selected" : ""}`;
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    );
  };