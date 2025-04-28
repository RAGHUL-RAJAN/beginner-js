let productPrices = [12,23,54,65,76,77]

let discountedPrices = productPrices.map(price => price * 0.1)

let affordableProducts = discountedPrices.filter(price => price < 50)

let totalAffordableCost = affordableProducts.reduce((sum,price)=> sum+price,0)

console.log(discountedPrices)

console.log(affordableProducts)

console.log(totalAffordableCost)