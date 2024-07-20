import { memo } from 'react';
import isEqual from "react-fast-compare"

// Types
import IProduct from "types/product";

// Components
import { CardProduct } from 'components';

// Utils
import shallowEqual from "utils/shallowEqual"

type ProductListProps = {
  data: IProduct[]
}
const ProductList = ({ data }: ProductListProps) => {
  return (
    <>
      {data.map((item: IProduct) => {
        const { id, title, price} = item;
        return (
          <CardProduct
            key={id}
            id={id}
            title={title}
            price={price}
          />
        )
      })}
    </>
)};

export default ProductList;
