type Props = 
| {type: 'from', loading?: undefined,  value: string, onChange: (value: string) => void}
| {type: 'to', loading?: boolean, value: string, onChange: (value: string) => void}

const TextArea: React.FC<Props> = ({ loading, type, value, onChange}) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement> ) => {
        onChange(event.target.value)
    }

    return ( 
        <textarea 
            value={value} 
            cols={20}   
            rows={8}
            disabled={type === 'to' && loading === true}
            placeholder={type === 'from' ? 'Introducir texto' : loading ? 'Traduciendo..' : 'Traduccion'}
            onChange={handleChange}
        >
        </textarea>
     );
}
 
export default TextArea;