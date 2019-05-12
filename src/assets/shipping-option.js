export function getShippingRate(weight, shippingOption) {
  const fixedShippingRate = 0.4;
  const shippingWeight = parseFloat(weight);
  const option = parseFloat(shippingOption);
  const shippingPrice = option === 1;
  return((shippingWeight * fixedShippingRate) * shippingPrice).toFixed(2);
}

//basically the shippping price. taking the shipping weight and multiplying it by .4
