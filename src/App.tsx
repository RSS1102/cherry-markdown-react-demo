import { useEffect, useRef } from 'react'

import './App.css'
import Cherry from 'cherry-markdown';


function App() {
  const cherry = useRef<Cherry | null>(null)
  useEffect(() => {
    cherry.current = new Cherry({
      id: "cherry-markdown",
      value: "# Hello World",
    });
  }, [cherry])

  const getCherryValue = () => {
    const value = cherry.current?.getValue()
    alert(value)
  }
  const setCherryValue = () => cherry.current?.setValue("# Hello Cherry 123")
  
  return (
    <>
      <button onClick={setCherryValue}>set Cherry value</button>
      <button onClick={getCherryValue}>get Cherry value</button>
      <div id="cherry-markdown"></div>
    </>
  )
}

export default App
