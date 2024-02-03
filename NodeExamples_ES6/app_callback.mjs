import rect from './rectangle_callback.mjs';

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle_callback) => {
        if (err) {
            console.log('ERROR:', err.message);
        }
        else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle_callback.area()}`)
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle_callback.perimeter()}`)
        }
    })
    console.log('This statement is logged after the call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);