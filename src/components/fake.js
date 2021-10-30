import { useState, useEffect } from 'react'
// TODO: implement payload state, where data from the fakeEvent will be stored if it has any

const useFakeEvent = (handler=()=>{}) => {

  const [ fakeEventCount, setFakeEventCount ] = useState(0) // It 'fires' the fakeEvent and counts how many times the fakeEvent was fired
  useEffect(() => {
    if (fakeEventCount > 0) handler() // Conditional for ignoring component startup
  }, [fakeEventCount, handler])

  const fakeEventEmitter = () => {
    setFakeEventCount(c => c + 1)
  }

  return fakeEventEmitter
} 

export default useFakeEvent;