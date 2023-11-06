import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => setValue('')

  return {
    type,
    value,
    onChange,
    reset
  }
}

export const useAnecdoteById = (match, anecdotes) => {
  if (!match) { return null }
    const anecdote = anecdotes.find(a => a.id === parseInt(match.params.id))
    return anecdote
}