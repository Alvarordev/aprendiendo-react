import { useReducer } from "react"
import { Languages, type Action, type State, FromLanguage } from "../types"
import { AUTO_LANGUAGE } from "../consts"

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

        if (state.fromLanguage === AUTO_LANGUAGE) return state

        const loading = state.fromText !== ''

        return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
        result: '',
        loading
        }
    }

    if (type === 'SET_FROM_LANGUAGE') {

        const loading = state.fromText !== ''

        return {
        ...state,
        fromLanguage: action.payload,
        loading,
        result: ''
        }
    }

    if(type === 'SET_TO_LANGUAGE') {

        const loading = state.fromText !== ''

        return {
        ...state,
        toLanguage: action.payload,
        loading,
        result: ''
        }
    }

    if(type === 'SET_FROM_TEXT') {

        const loading = action.payload !== ''

        return {
        ...state,
        fromText: action.payload,
        loading,
        result: ''
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
 