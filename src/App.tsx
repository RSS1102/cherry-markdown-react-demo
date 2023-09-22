
import './App.css'
import APIs from '@/apis/baseApi';
import Cherry from 'cherry-markdown';
import { useRef, useEffect } from 'react';
import EngineApi from './apis/engineApi';
import ToolbarHandlersApi from './apis/toolbarHandlersApi';

function App() {
  const cherry = useRef<Cherry | null>(null)
  useLayoutEffect(() => {
    if (!cherry.current) {
      cherry.current = new Cherry({
        id: "cherry-markdown",
        value: "# Hello World",
        locale: "en_US",
      });
    }
  }, []);

  return (
    <div className='home'>
      <div className='apis' >
        <APIs cherry={cherry} />
        <EngineApi cherry={cherry}/>
        <ToolbarHandlersApi cherry={cherry}/>
      </div>
      <div id="cherry-markdown" />
    </div>
  )
}

export default App
