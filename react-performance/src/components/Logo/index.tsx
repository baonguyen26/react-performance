import { memo } from "react"
import logo from 'logo.svg';
import 'App.css';

// Utils
import shallowEqual from "utils/shallowEqual"

const Logo = () => (
  <img src={logo} className="react-logo" alt="logo" />
)

export default Logo;
