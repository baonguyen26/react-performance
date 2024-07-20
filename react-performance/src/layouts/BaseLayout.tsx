import { memo, useContext, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css';

// Components
import { Box } from '@mui/material'
import { Footer } from 'components'

// Constants, mocks
import { COLORS } from 'constants/colors';
import { THEMES } from 'constants/themes';

// Contexts
import { ThemeContext } from 'contexts/ThemeContext';


const BaseLayout = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = useMemo(() => theme === THEMES.DARK, [theme]);

  return (
    <>
      <div className="App-header" style={{ backgroundColor: isDarkTheme ? COLORS.dark : COLORS.lightest}}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default BaseLayout;
