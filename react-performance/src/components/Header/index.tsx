import { ReactNode, memo } from "react"
import isEqual from "react-fast-compare"

// Components
import { Box, Link } from '@mui/material'

// Utils
import shallowEqual from "utils/shallowEqual"

type HeaderProps = {
  children: ReactNode
}

const Header = ({children}: HeaderProps) => {
  return (
    <Box
      width={'100%'}
      padding={'3px 0 10px'}

      sx={{
        backgroundColor: '#fff',
        boxShadow: '0px 15px 10px -15px #111',
      }}
    >
      {children}
    </Box>
  )
}

export default Header;
