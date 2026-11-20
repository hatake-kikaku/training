function calcOrderAmount(items, discountRate = 0) {
  let subtotal = 0;
  for (const item of items) {
    const unitPrice = item.memberPrice ?? item.price;
    subtotal += unitPrice * item.qty;
  }

  const discounted = subtotal * (1 - discountRate);
  const taxRate = 0.08;
  const tax = Math.floor(discounted * taxRate);
  const shippingFee = discounted >= 5000 ? 0 : 600;
  const total = discounted + tax + shippingFee;

  return Math.floor(total);
}

module.exports = { calcOrderAmount };