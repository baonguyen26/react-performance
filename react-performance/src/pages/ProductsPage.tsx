import { useState, useCallback, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// Components
import { Link } from "@mui/material";
import {
  Header,
  Button,
  Logo,
  CardProduct,
  ProductList,
} from "components";

// Constants, mocks
import { PRODUCT_LIST } from "mocks/product-data"
import { ROUTES } from "constants/routes"

// Types
import IProduct from "types/product";

// Utils, helpers
import formatData from "utils/formatData"

// Contexts
import { ThemeContext } from 'contexts/ThemeContext'

const ProductsPage = () => {
  const { changeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // An expensive calculation
  const productsFormatted = formatData(PRODUCT_LIST) || [];
  // const productsFormatted = useMemo(() => formatData(PRODUCT_LIST) || [], []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const productList =
    productsFormatted.map((item: IProduct) => {
      const { id, title, price} = item;
      return (
        <CardProduct
          key={id}
          id={id}
          title={title}
          price={price}
        />
      )
    })

  // const productList = useMemo(() => (
  //   productsFormatted.map((item: IProduct) => {
  //     const { id, title, price} = item;
  //     return (
  //       <CardProduct
  //         key={id}
  //         id={id}
  //         title={title}
  //         price={price}
  //       />
  //     )
  //   })
  // ), [productsFormatted])

  return (
    <>
      <Header>
        <Link
          href={ROUTES.HOME}
          underline="hover"
          sx={{
            fontSize: "10px",
            padding: "0 20px",
          }}
          onClick={handleGoBack}
        >
          Go Back
        </Link>
      </Header>
      <Logo />
      <div className="control-wrapper">
        <Button
          label="Change Mode"
          variant="contained"
          onClick={changeTheme}
        />
      </div>
      <div className="list-wrapper">
        {productList}
        {/* <ProductList data={productsFormatted} /> */}
      </div>
    </>
  );
}

export default ProductsPage;
