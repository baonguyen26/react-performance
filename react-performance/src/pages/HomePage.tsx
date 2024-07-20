import { useState, useCallback, useMemo, useContext, memo } from 'react';
import '../App.css';

// Components
import { Link } from '@mui/material';
import {
  Header,
  Button,
  Text,
  Logo,
  MainContent,
} from 'components';

// Contexts
import { ThemeContext } from 'contexts/ThemeContext'
import { ROUTES } from 'constants/routes';

const HomePage = () => {
  const { changeTheme } = useContext(ThemeContext);
  const [clickTimes, setClickTimes] = useState<number>(0);

  const handleClick = () => {
    setClickTimes((prevState) => prevState + 1);
  };

  // const handleClick = useCallback(() => {
  //   setClickTimes((prevState) => prevState + 1);
  // }, []);

  const handleChangeMode = () => {
    changeTheme()
  };

  // const handleChangeMode = useCallback(() => {
  //   changeTheme()
  // }, [changeTheme]);

  const ChangeModeBtn =
    <Button
      label='Change Mode'
      variant='contained'
      onClick={handleChangeMode}
    />

  // const ChangeModeBtn = useMemo(() => (
  //   <Button
  //     label='Change Mode'
  //     variant='contained'
  //     onClick={handleChangeMode}
  //   />
  // ), [handleChangeMode])

  const IncBtn =
    <Button
      label='Inc'
      variant='contained'
      onClick={handleClick}
    />

  // const IncBtn = useMemo(() => (
  //   <Button
  //     label='Inc'
  //     variant='contained'
  //     onClick={handleClick}
  //   />
  // ), [handleClick])

  return (
    <>
      <Header>
        <Link
          href={ROUTES.PRODUCTS}
          underline="hover"
          sx={{
            fontSize: '10px',
            padding: '0 20px'
          }}
        >
          Product Page
        </Link>
      </Header>
      <Logo />
      {/* Split component */}
      <div className='control-wrapper'>
        {ChangeModeBtn}
        {IncBtn}
      </div>
      <Text count={clickTimes} />
      {/* <MainContent /> */}
    </>
  );
}

export default HomePage;
