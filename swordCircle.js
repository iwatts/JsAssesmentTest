/*
100 people stand in a circle in order 1 to 100. No. 1 has a sword. He kills the next person (i.e. No. 2) and gives the sword to the next living person (i.e. No. 3). All people do the same until only 1 survives. Which number survives to the end?
 
Answer: 73

*/

function swordCircle(circleSize) {
	let peopleInCircle = [];
	let currentCircleSize = circleSize;
	/*Populate the array with the people */
	for (i = 1; i <= currentCircleSize; i++) {
		peopleInCircle.push(i);
	}
	
	/*Loop through the arry until the is 1 left */
	while (currentCircleSize > 1) {
		peopleInCircle.map((person, index) => {
			/*If they are not on the end, remove the next in line */
			if( index != peopleInCircle.length - 1) {
				peopleInCircle.splice(index + 1, 1)
			/*If they are on the end, remove the first person in the array */
			} else {
				peopleInCircle.splice(0,1);
			}
		})
		/* Update the size of the circle */
		currentCircleSize = peopleInCircle.length
	} ;

	console.log(peopleInCircle);
	return peopleInCircle;
}

swordCircle(100);