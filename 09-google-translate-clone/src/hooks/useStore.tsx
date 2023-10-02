import { useReducer } from "react"
import { Languages, type Action, type State, FromLanguage } from "../types"

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
        fromLanguage: state.toLanguage,
        toLanguange: state.fromLanguage,
        result: ''
        }
    }

    if (type === 'SET_FROM_LANGUAGE') {
        return {
        ...state,
        fromLanguage: action.payload,
        }
    }

    if(type === 'SET_TO_LANGUAGE') {
        return {
        ...state,
        toLanguage: action.payload
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

export const useStore = () => {
    const [{
        fromLanguage, 
        toLanguage, 
        fromText, 
        result, 
        loading
        }, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguages = () => {
        dispatch({type: 'INTERCHANGE_LANGUAGES'})
    }

    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({type: 'SET_FROM_LANGUAGE', payload})
    }

    const setToLanguage = (payload: Languages) => {
        dispatch({type: 'SET_TO_LANGUAGE', payload})
    }

    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }
    
    const setResult = (payload: string) => {
        dispatch({ type: 'SET_FROM_RESULT', payload })
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result, 
        loading, 
        interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult}
}
 