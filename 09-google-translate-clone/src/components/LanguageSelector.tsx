import { AUTO_LANGUAGE, LANGUAGES } from "../consts";
import { type Languages, type FromLanguage, SectionType } from "../types.d";

/*interface Props {
    onChange: (language: Languages) => void
    value: FromLanguage
    type: string
}*/

type Props =
    | {type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void}
    | {type: 'to', value: Languages, onChange: (language: Languages) => void}

const LanguageSelector: React.FC<Props> = ({ onChange, value, type}) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Languages)
    }

    return ( 
        <select className='form-select' onChange={handleChange} value={value}>
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar Idioma</option>}
            {Object.entries(LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </select>
     );
}
 
export default LanguageSelector;