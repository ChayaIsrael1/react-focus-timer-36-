import {useThemeContext} from '../context/ThemeContext.js'
function ThemeButton() {
  const {theme,handleSetTheme} = useThemeContext()
  console.log('render: ThemeButton')

  return <button className={`${theme}-button`} onClick={handleSetTheme}>{theme=='light'? 'dark': 'light' } mode</button>
}

export default ThemeButton
