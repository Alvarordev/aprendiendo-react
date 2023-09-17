import { useEffect, useState } from 'react'
import { getFact } from '../services/getFact'

export const useCatFact = () => {
  const [fact, setFact] = useState('')

  const refreshFact = () => {
    getFact().then(newFact => setFact(newFact))
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
