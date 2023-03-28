function calculateRentalCosts(daysRented, carType) {
  let rentalCost = 0;
  switch(carType) {
    case "Economy":
      rentalCost = 4000;
      break;
    case "Midsize":
      rentalCost = 10000;
      break;
    case "Luxury":
      rentalCost = 20000;
      break;
    default:
      return "Invalid car Type"
  }
  return rentalCost * daysRented;
}
// calling the function
let daysRented = 5;
let carType = "Economy";
let totalCost = calculateRentalCosts(daysRented, carType);
console.log("Total cost: Rs. " + totalCost + "/-")