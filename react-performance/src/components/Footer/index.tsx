import { memo } from "react"
import { Box, Link } from "@mui/material"

// Utils
import shallowEqual from "utils/shallowEqual"

// Components
import CopyRightText from "components/CopyRightText"

const Footer = () => (
  <Box
    display={'flex'}
    justifyContent={'center'}
    sx={{
      backgroundColor: '#fff',
      boxShadow: '0px -15px 10px -15px #111',
    }}
  >
    <CopyRightText />
  </Box>
);

export default Footer;
