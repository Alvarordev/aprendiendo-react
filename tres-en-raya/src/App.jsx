import { useState } from 'react'
import './App.css'

const TURNS = {
  X: '❌',
  O: '⭕'
}

const Square = ({children, index, isSelected, updateBoard}) => {

  const handleClick = () => {
    updateBoard(index)
  }

  const className = `square ${isSelected ? 'is-selected' : '' }`

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WinnerModal = ({winner, resetGame}) => {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Gano'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Comenzar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

const WINNING_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const checkWinner = (boardToCheck) => {
  for(const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if(
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {

    if(board[index] || winner) return 
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) 
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <section className='game'>
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App