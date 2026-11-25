import Header from './components/Header.jsx'
import FocusTimer from './components/FocusTimer.jsx'
import SessionList from './components/SessionList.jsx'
import { useEffect, useState } from 'react'
import {ThemeContext} from './context/ThemeContext.js'
import ThemeButton from './components/ThemeButton.jsx'

function App() {
  const [theme,setTheme]=useState('light')
  console.log('render: App')

  const [sessions, setSession] = useState([])

  function handleSaveSession(session){
    setSession(prev=>[...prev, session])}

  function handleSetTheme(){
    setTheme(theme=='light' ? 'dark ': 'light')
  }

  useEffect(()=>{
    document.title =`Focus Timer (${sessions.length})`
  },[sessions.length])

  return (
    <div className={`app ${theme}`}>
      <ThemeContext.Provider value={{theme,handleSetTheme}}>
      <Header />
      <FocusTimer handleSaveSession={handleSaveSession}/>
      <SessionList sessions={sessions} />
      <ThemeButton />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
