/**
 * This is shallow equal
 * Returns:
 *  - True: Will not trigger re-render
 *  - False: Will trigger re-render
 */
const shallowEqual = (prevProps: any, nextProps: any): boolean => {
  for(let key in prevProps) {
    if(!(key in nextProps) || !Object.is(prevProps[key], nextProps[key])) {
      return false;
    }
  }

  for(let key in nextProps) {
    if(!(key in prevProps) || !Object.is(prevProps[key], nextProps[key])) {
      return false;
    }
  }

  return true;
}

export default shallowEqual;
