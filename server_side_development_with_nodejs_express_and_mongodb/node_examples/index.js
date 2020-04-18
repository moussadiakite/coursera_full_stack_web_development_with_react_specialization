let rect = require('./rectangle')

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    if(l <= 0, b <= 0) {
        console.log("Rectangle dimensions should be greater than 0");
        return;
    }
    console.log("The area of the rectabgle is: " + rect.area(l, b));
    console.log("The perimeter of the rectabgle is: " + rect.perimeter(l, b));
}

solveRect(2, 3);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);