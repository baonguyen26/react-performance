import { memo } from "react";
import isEqual from "react-fast-compare";

// Utils
import shallowEqual from "utils/shallowEqual";

type TextProps = {
  count: number
}
const Text = ({ count }: TextProps) => {
  return (
    <p>
      Clicked: {count}
    </p>
  )
}

export default Text;
