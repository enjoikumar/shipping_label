export function getShippingRate(weight, shippingOption) {
  const fixedShippingRate = 0.4;
  const shippingWeight = parseFloat(weight);
  const option = parseFloat(shippingOption);
  const shippingPrice = option === 1;
  return((shippingWeight * fixedShippingRate) * shippingPrice).toFixed(2);

}
