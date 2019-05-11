const shippingRate = 0.40
shippingCost = weight * shippingRate * (shippingOption === shippingOption.ground ? 1 : 1.5);

export function shippingOptions(option) {
  return (option === 1) ? "Ground" : "Express"
}

export function getShippingRate(weight, shippingOption) {
  const fixedShippingRate = 0.4;
  const expressRate = 2.0;
  const shippingWeight = parseFloat(weight);
  const option = parseFloat(shippingOption);
  const shippingPrice = option === 1 ? 1 : expressRate;
  return((shippingWeight * fixedShippingRate) * shippingPrice).toFixed(2);

}
