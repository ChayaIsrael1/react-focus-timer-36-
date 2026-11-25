import formatTime from '../utils/formatTime.js'
import { useEffect, useState,useRef } from 'react'

function FocusTimer({ handleSaveSession }) {
  console.log('render: FocusTimer')
  const [typing, setTyping] = useState("")
  const [isStart, setIsStart] = useState(false)
  const [timer, setTimer] = useState(0)
  const inputRef = useRef(null)
  const distractions = useRef([])
  
  function handleSetDistractions (){
    distractions.current = [...distractions.current, formatTime(timer)]
  }
  
  function handleTyping(e) { setTyping(e.target.value) }
  
  function handleStart() { setIsStart(prev => !prev) }


  useEffect(() => {
    if (!isStart) return;
    const intervalId = setInterval(() => { setTimer((prev) => prev+1) }, 1000)
    return () => clearInterval(intervalId)
  }, [isStart])

  function handleSave(){
    handleSaveSession(session);
    setTyping("");
    setTimer(0);
    setIsStart(false);
    distractions.current = [];
    inputRef.current.focus();
  }

  const session = { topic: typing, seconds: timer, distractions: distractions.current }

  return (
    <section className="panel">
      <label htmlFor="topic">What are you studying?</label>
      <input ref={inputRef} id="topic" type="text" placeholder="e.g. React hooks" onChange={handleTyping} value={typing} />

      <p className="now">Now studying: {typing}</p>
      <p className="clock">{formatTime(timer)}</p>

      <div className="buttons">
        <button onClick={handleStart}>{isStart ? 'Pause' : 'Start'}</button>
        <button onClick={handleSetDistractions}>Got distracted</button>
        <button onClick={handleSave} disabled={typing === ""}>Save session</button>
      </div>
    </section>
  )
}

export default FocusTimer
