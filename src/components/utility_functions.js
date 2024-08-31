// Function to calculate the yearly fees of the plans
function calcYearlyFees(monthVal) {
  let yearlyDiscount = monthVal * 2;
  return monthVal * 12 - yearlyDiscount;
}
export {calcYearlyFees};

// Function to extract the numeric values from a string
function extractNumericValues(AlNmStr) {
  const numericValues = AlNmStr.match(/\d+/g).join("");
  return Number(numericValues);
}
export {extractNumericValues};