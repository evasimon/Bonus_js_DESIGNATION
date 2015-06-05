/*##Table Generator (Version 2)##

Write a function that will generate a table of alternating characters of 'x' and 'o' based on a user-specified number of rows and columns.

**Input:**

 - number of rows
 - number of columns

**Example:**
createTable(5, 5)

**Output:**

xoxox
oxoxo
xoxox
oxoxo
xoxox*/

var numberOfRows = prompt('Please type in the desired number of rows:');
var numberOfColumns = prompt('Please type in the desired number of columns:');

function createTable() {
	var colArray = [[]];
	var isX = true;
	for (j = 0; j < numberOfRows; j++) {
		var rowArray=[];
		for ( i = 0; i < numberOfColumns; i++ ) {
			if (isX) {
				rowArray.push("x");
				isX = false;
				document.write("x");
			} else {
				rowArray.push("o");
				isX = true;
				document.write("o");
			}
		}
		colArray.push(rowArray);
		document.write("<br>");
	}
	return colArray;
}

console.log(createTable());

