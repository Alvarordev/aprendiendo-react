import { useReducer } from 'react'
import './App.css'
import { Action, type State } from './types'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

const reducer = (state: State, action: Action) => {
  const { type } = action

  if(type === 'INTERCHANGE_LANGUAGES'){
    return {
      ...state,
      fromLanguange: state.toLanguage,
      toLanguange: state.fromLanguage,
      result: ''
    }
  }

  if(type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguange: action.payload,
      result: ''
    }
  }

  if(type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguange: action.payload
    }
  }

  if(type === 'SET_FROM_TEXT') {
    return {
      ...state,
      fromText: action.payload,
      loading: true
    }
  }

  if(type === 'SET_FROM_RESULT') {
    return {
      ...state,
      result: action.payload,
      loading: true
    }
  }

  return state
}

function App() {
  const 
  [{fromLanguage, toLanguage, fromText, result, loading}, dispatch] = useReducer(reducer, initialState)


  return (
    <>
      <h1>Google Translate</h1>
    </>
  )
}

export default App
