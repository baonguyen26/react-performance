import { ReactNode, memo } from "react"
import { Button as BaseButton } from '@mui/material';
import isEqual from "react-fast-compare"
import shallowEqual from "utils/shallowEqual"

type ButtonProps = {
  label: string
  onClick: () => void
  [key: string]: number | string | Function
}
const Button = ({ label, onClick, ...rest }: ButtonProps) => {
  return (
    <BaseButton
      onClick={onClick}
      color="success"
      size="small"
      sx={{
        fontSize: '10px'
      }}
      {...rest}
    >
      {label}
    </BaseButton>
  )
}
export default Button;
