import { memo, useMemo, useContext, useState, useCallback } from "react"

// Components
import { Button, Text } from 'components'

// Utils
import shallowEqual from "utils/shallowEqual"

// Contexts
import { ThemeContext } from 'contexts/ThemeContext'

const MainContent = () => {
  const { changeTheme } = useContext(ThemeContext);
  const [clickTimes, setClickTimes] = useState<number>(0);

  const handleClick = useCallback(() => {
    setClickTimes((prevState) => prevState + 1);
  }, []);

  const ChangeModeBtn = useMemo(() => (
    <Button
      label='Change Mode'
      variant='contained'
      onClick={changeTheme}
    />
  ), [changeTheme])

  const IncBtn = useMemo(() => (
    <Button
      label='Inc'
      variant='contained'
      onClick={handleClick}
    />
  ), [handleClick])

  return (
    <>
      <div className='control-wrapper'>
        {ChangeModeBtn}
        {IncBtn}
      </div>
      <Text count={clickTimes} />
    </>
  )
}

export default memo(MainContent, shallowEqual);
