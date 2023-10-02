import './App.css'
import { Icon } from './components/Icons'
import LanguageSelector from './components/LanguageSelector'
import TextArea from './components/TextArea'
import { useStore } from './hooks/useStore'
import { SectionType } from './types.d'

function App() {
  const {fromLanguage, toLanguage, result, fromText, loading, setFromLanguage, setToLanguage, interchangeLanguages, setFromText, setResult} = useStore()

  return (
    <main>
      <h1>Google Translate</h1>
      <section className='grid'>

        <div className='textarea-container'>
          <LanguageSelector 
            onChange={setFromLanguage} 
            type={SectionType.From} 
            value={fromLanguage} 
          />
          <TextArea type={SectionType.From} onChange={setFromText} value={fromText}/>
        </div>

        <div className='button-container'>
          <button title='swap languages' onClick={interchangeLanguages}>
            <Icon/>
          </button>
        </div>

        <div className='textarea-container'>
          <LanguageSelector
            onChange={setToLanguage} 
            type={SectionType.To} 
            value={toLanguage}
          />
          <TextArea type={SectionType.To} onChange={setResult} loading={loading} value={result}/>
        </div>

      </section>
    </main>
  )
}

export default App
