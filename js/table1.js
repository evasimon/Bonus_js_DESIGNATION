/********************************##Table Generator##************************************

Write a function that will generate a table that is a user-specified number of rows and columns.

**Input:**

 - number of rows
 - number of columns
 - character to use

**Example:**
createTable(5, 5, 'm')

**Output:**

mmmmm
mmmmm
mmmmm
mmmmm
mmmmm********************************************************************************/


var numberOfRows = prompt('Please type in the desired number of rows:');
var numberOfColumns = prompt('Please type in the desired number of columns:');
var character = prompt('Please type in the desired character:');

function createTable() {
	var colArray = [[]];
	for (j = 0; j < numberOfRows; j++) {
		var rowArray=[];
		for ( i = 0; i < numberOfColumns; i++ ) {
			rowArray.push(character);
			document.write(character);
		}
		colArray.push(rowArray);
		document.write("<br>");
	}
	return colArray;
}

console.log(createTable());



























