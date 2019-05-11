
export function getShippingCost(option) {
  return (option === 1) ? "Ground" : "Express";
}

export function getShippingRate(weight, shippingOption) {
  const fixedShippingRate = 0.4;
  const expressRate = 2.0;
  const shippingWeight = parseFloat(weight);
  const option = parseFloat(shippingOption);
  const shippingPrice = option === 1 ? 1 : expressRate;
  return((shippingWeight * fixedShippingRate) * shippingPrice).toFixed(2);

}
