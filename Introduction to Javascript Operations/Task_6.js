
// Function to calculate BMI
function calculateBMI(weight, height) {
  // BMI formula: weight (kg) / (height (m) * height (m))
  return weight / (height * height);
}



// Example values
let height = 60; 
let weight = 5; 


// Calculate BMI
let interest = calculateBMI(height, weight);

// Display the result
console.log(`Height: ${height}`);
console.log(`Weight: ${weight}`);

