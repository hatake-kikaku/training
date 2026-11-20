function calcOrderAmount(items, discountRate = 0) {
  let subtotal = 0;
  for (const item of items) {
    const unitPrice = item.memberPrice ?? item.price;
    subtotal += unitPrice * item.qty;
  }

  const discounted = subtotal * (1 - discountRate);
  const taxRate = 0.08;
  // Calculate tax and shipping fee
  const tax = Math.floor(discounted * taxRate);
  // Shipping fee is 0 if discounted amount is 5000 or more, otherwise it's 600
  const shippingFee = discounted >= 5000 ? 0 : 600;
  // Calculate total amount
  const total = discounted + tax + shippingFee;

  return Math.floor(total);
}

module.exports = { calcOrderAmount };