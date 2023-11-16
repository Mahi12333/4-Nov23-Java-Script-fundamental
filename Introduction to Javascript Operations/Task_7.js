const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  // Area formula: π * radius * radius
  const pi = Math.PI;
  return pi * radius * radius;
}

// Get user input using readline
rl.question('Enter the radius of the circle: ', (radiusInput) => {
  // Parse input to a number
  const radius = parseFloat(radiusInput);

  // Validate input
  if (isNaN(radius) || radius <= 0) {
    console.log('Please enter a valid numerical value for the radius.');
  } else {
    // Calculate the area of the circle
    const area = calculateCircleArea(radius);

    // Display the result
    console.log(`Radius: ${radius}`);
    console.log(`Area of the circle: ${area.toFixed(2)}`);

    // Close the readline interface
    rl.close();
  }
});

// Handle close event for readline interface
rl.on('close', () => {
  console.log('Program terminated.');
  process.exit(0);
});
