import formatTime from '../utils/formatTime.js'
import {useThemeContext} from '../context/ThemeContext.js'

function SessionItem({ session }) {
  console.log('render: SessionItem')
  const {theme,handleSetTheme} = useThemeContext()

  return (
    <li className={`session ${theme}`}>
      <strong>{session.topic}</strong>
      <span>{formatTime(session.seconds)}</span>
      <span> Distractions: {session.distractions.length>0? session.distractions.join(',') : 'None'}</span>
    </li>
  )
}

export default SessionItem
