import { useMemo } from "react";
import isEqual from "react-fast-compare"
import shallowEqual from "utils/shallowEqual"
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Stack,
} from '@mui/material';
import { Button } from 'components'
import { DiscountIcon } from 'components/icons'

// Constants
import { DISCOUNT_RATE } from 'constants/discount';

// Utils, Helpers
import { getPriceAfterDiscount } from 'utils/getPriceAndTax'

type CardProductProps = {
  id: string,
  title: string,
  price: number,
}
const CardProduct = ({ id, title, price: productPrice }: CardProductProps) => {
  const handleShowDetail = () => {
  };

  // An expensive calculation
  const newPriceAfterDiscount = useMemo(() => getPriceAfterDiscount(productPrice), [productPrice]);

  // const newPriceAfterDiscount = getPriceAfterDiscount(productPrice);

  const isDiscount = productPrice !== newPriceAfterDiscount;

  // const renderDiscountIcon = (
  //   <Stack
  //     alignItems={'flex-end'}
  //     position={'absolute'}
  //     right={0}
  //   >
  //     <DiscountIcon />
  //   </Stack>
  // )

  const renderDiscountIcon = useMemo(() => (
    <Stack
      alignItems={'flex-end'}
      position={'absolute'}
      right={0}
    >
      <DiscountIcon />
    </Stack>
  ), []);

  return (
    <Box sx={{ width: 180, position: 'relative' }}>
      <Card
        variant="outlined"
      >
        {isDiscount && renderDiscountIcon}
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            textOverflow={'ellipsis'}
            overflow={'hidden'}
            sx={{
              whiteSpace: 'nowrap',
              maxLines: 3,
            }}
          >
            {title}
          </Typography>
          <Stack flexDirection={'row'}>
            <Typography
              sx={{
                mb: 1.5,
                mr: 1,
                ...(isDiscount && {
                  textDecoration: 'line-through',
                })
              }}
              color="text.secondary"
            >
              {`$${productPrice}`}
            </Typography>
            {isDiscount && (
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
              >
                {`$${newPriceAfterDiscount}`}
              </Typography>
            )}
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleShowDetail}
            label="Show More"
          />
        </CardActions>
      </Card>
    </Box>
  )
}
export default CardProduct;
