// Create a new Line object.
var l = new Line();
// Set the first set of coordinates for the line.
l.x1 = 50;
l.y1 = 100;
// Set the second set of coordinates for the line.
l.x2 = 200;
l.y2 = 300;
// Set the width of the line.
l.borderWidth = 3;

// Generate RGBA colors at random when the program begins.
var red = random(0, 255);
var green = random(0, 255);
var blue = random(0, 255);

// These values will change the value of the RGBA color as the animation continues.
var redChange = 1.5;
var greenChange = 1.5;
var blueChange = 1.5;


// Make the background black before the animation begins.
background('black');
// Create values to move each of the coordinates of the line.
var x1move = 5;
var y1move = 4;
var x2move = 3;
var y2move = 2;

// The animate function runs the code inside of it 30 times every second.
function animate() {

   // Move the coordinates of the line a little bit each frame.
   l.x1 += x1move;
   l.y1 += y1move;
   l.x2 += x2move;
   l.y2 += y2move;

   // Check if the x1coordinate of the line has hit the right side of the canvas.
   if (l.x1 > canvas.width || l.x1 < 0) {
      // It has! Reverse the direction it moves.
      x1move = -x1move;
      // Close the if statement.
   }

   // Check if the x2 coordinate of the line has hit the edges of the canvas.
   if (l.x2 > canvas.width || l.x2 < 0) {
      // It has. Reverse the direction of movement.
      x2move = -x2move;
      // Close the if statement.
   }

   // Check if the y1 coordinate of the line has hit the bottom or the top of the canvas.
   if (l.y1 > canvas.height || l.y1 < 0) {
      // It has. Reverse the direction of movement.
      y1move = -y1move;
      // Close the if statement.
   }

   // Check if the y2 coordinate of the line has hit the bottom or the top of the canvas.
   if (l.y2 > canvas.height || l.y2 < 0) {
      // It has. Reverse the direction of movement.
      y2move = -y2move;
      // Close the if statement.
   }

   // Increment the value of red.
   red += redChange * random(1, 5);
   // Increment the value of green.
   green += greenChange * random(1, 5);
   // Increment the value of blue.
   blue += blueChange * random(1, 5);

   // Check if the value of red has reached 255 OR 0.
   if (red > 255 || red < 0) {
      // It is. Reverse the way this property changes.
      redChange = -redChange;
      // Close the if statement.
   }

   // Check if the value of green has reached 255 OR 0.
   if (green > 255 || green < 0) {
      // It is. Reverse the way this property changes.
      greenChange = -greenChange;
      // Close the if statement.
   }

   // Check if the value of blue has reached 255 OR 0.
   if (blue > 255 || blue < 0) {
      // It has. Reverse the way this property changes.
      blueChange = -blueChange;
      // Close the if statement.
   }

   // Set the color of the line.
   l.borderColor = {red: red, green: green, blue: blue};
   // Draw the line.
   l.draw();
   // Close the animate function.
}
