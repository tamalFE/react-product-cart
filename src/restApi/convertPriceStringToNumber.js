const convertPriceStringToNumber = (string) => {
  const priceString = string.product.price;

  const priceStringWithOutComma = priceString.replace(/,/g, '');

  const currentValue = parseInt(priceStringWithOutComma);

  return currentValue;
};

export default convertPriceStringToNumber;
