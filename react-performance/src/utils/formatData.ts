import IProduct from "../types/product";
import { getPriceAndTax } from "./getPriceAndTax";
/**
 * Function to format product data
 * Returns:
 *  - Returns the product formatted
 */
const formatData = (data: IProduct[]): IProduct[]  => data.map(item => ({
    ...item,
    price: getPriceAndTax(item.price)
  }))

export default formatData;


