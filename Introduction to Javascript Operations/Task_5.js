
function calculateSimpleInterest(principal, rate, time) {

    return (principal * rate * time) / 100;
  }
  
  // Example values
  let principalAmount = 1000; // Principal amount in dollars
  let interestRate = 5; // Annual interest rate in percentage
  let timePeriod = 2; // Time period in years
  
  // Calculate simple interest
  let interest = calculateSimpleInterest(principalAmount, interestRate, timePeriod);
  
  // Display the result
  console.log(`Principal Amount: $${principalAmount}`);
  console.log(`Interest Rate: ${interestRate}%`);
  console.log(`Time Period: ${timePeriod} years`);
  console.log(`Simple Interest: $${interest}`);
  