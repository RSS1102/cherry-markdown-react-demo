
import './App.css'
import APIs from '@/apis';
import Cherry from 'cherry-markdown';
import { useRef, useEffect } from 'react';

function App() {
  const cherry = useRef<Cherry | null>(null)
  useEffect(() => {
    cherry.current = new Cherry({
      id: "cherry-markdown",
      value: "# Hello World",
    });
  }, [])

  return (
    <div className='home'>
      <APIs cherry={cherry} />
      <div id="cherry-markdown" />
    </div>
  )
}

export default App
