import { AUTO_LANGUAGE, LANGUAGES } from "./consts"

export interface State {
    fromLanguage: FromLanguage 
    toLanguage: Languages
    fromText: string
    result: string
    loading: boolean
}

export type Action =
    | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage}
    | { type: 'INTERCHANGE_LANGUAGES'}
    | { type: 'SET_TO_LANGUAGE', payload: Languages}
    | { type: 'SET_FROM_TEXT', payload: string}
    | { type: 'SET_FROM_RESULT', payload: string}

export type Languages = keyof typeof LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Languages | AutoLanguage
