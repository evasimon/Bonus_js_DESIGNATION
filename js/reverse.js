/*****************##Reverse Numbers##***********************************

Write a JavaScript function that reverse a number. Go to the editor
Example:

**Input:** 
x = 32243;

**Output:**
 34223****************************************************************/

var number = prompt('Please enter the number you wish to reverse:');
console.log(number);

function reverse() {
	var mynumber = "";
	for ( i = (number.length-1) ; i >= 0; i = i - 1 ) {
			
			mynumber = mynumber + number[i];
			console.log(mynumber);

	}
	document.write("The reverse number is here: " + mynumber);
}

reverse();




























