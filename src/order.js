function calcOrderAmount(items, discountRate = 0) {
  let subtotal = 0;
  for (const item of items) {
    const unitPrice = Math.max(0, item.price);
    subtotal += unitPrice * item.qty;
  }

  const discounted = subtotal * (1 - discountRate);
  const taxRate = item.taxExempt ? 0 : 0.1;
  const tax = Math.floor(discounted * taxRate);
  const shippingFee = discounted >= 3000 ? 0 : 500;
  const total = discounted + tax + shippingFee;

  return Math.round(total);
}

module.exports = { calcOrderAmount };