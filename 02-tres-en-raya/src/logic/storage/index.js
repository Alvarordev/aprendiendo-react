export const addToLocalStorage = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', turn);
}

export const removeFromLocalStorage = () => {
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}