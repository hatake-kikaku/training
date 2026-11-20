function calcOrderAmount(items, discountRate = 0) {
  let subtotal = 0;
  for (const item of items) {
    const unitPrice = item.price;
    subtotal += unitPrice * item.qty;
  }

  const discounted = subtotal * (1 - discountRate);
  const taxRate = 0.1;
  const tax = Math.floor(discounted * taxRate);
  const shippingFee = discounted >= 5000 ? 0 : 500;
  const total = discounted + tax + shippingFee;

  return total;
}

module.exports = { calcOrderAmount };