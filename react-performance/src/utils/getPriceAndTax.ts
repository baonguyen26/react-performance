// Constants
import { DISCOUNT_RATE } from 'constants/discount';

// Function to calculate the price after applying a discount
const getPriceAfterDiscount = (price: number): number => {
  let currentDiscount = 0

  DISCOUNT_RATE.some(item => {
    const { price: itemPrice, discount: itemDiscount } = item;
    if (price <= itemPrice) {
      currentDiscount = itemDiscount;
      return true;
    }
    return false;
  })

  // Calculate the discounted price
  let discountedPrice = price - (price * currentDiscount) / 100;

  // Convert the discounted price to a string formatted according to 'en-US' locale
  // with no grouping separators (useGrouping: false) and at least 2 integer digits (minimumIntegerDigits: 2)
  let formattedPrice = discountedPrice.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });

  // Parse the formatted price back to a float and return it
  return Number.parseFloat(formattedPrice);
}

/**
 * Function to calculate taxes and fees
 * Returns:
 *  - Returns the amount after taxes and fees
 */
const getPriceAndTax = (price: number): number  => {
  let tax = 0;

  if (price < 20) {
    tax = 15;
  } else if (price < 40) {
    tax = 14;
  } else if (price < 60) {
    tax = 13;
  } else if (price < 80) {
    tax = 12;
  } else if (price < 100) {
    tax = 11;
  } else {
    tax = 10;
  }

  return Number.parseFloat((price + (price*tax)/100).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  }))
}

export {
  getPriceAndTax,
  getPriceAfterDiscount,
};


