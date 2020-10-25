/*
A man has to buy 7 floors in a building. Numbered floor 1 to 68.
Conditions:
1. He cannot buy floors with prime number.
2. He cannot buy floor number containing prime digit.
3. Floor number 1 is reserved for services.


How many floors are legal?
 
Answer: 17

*/

function countEligibleFloors(totalFloors) {
	let eligibleFloors = [];
	for (i = 1; i <= totalFloors; i++) {
		if (i != 1 && isPrime(i) === false) {
			let numberLength = i.toString().length
			if (numberLength > 1) {
				doubleDigitArray = i.toString().split("").map(digit => parseInt(digit, 10));
				
				if (!doubleDigitArray.includes(2)
				&& !doubleDigitArray.includes(3)
				&& !doubleDigitArray.includes(5)
				&& !doubleDigitArray.includes(7)) {
					eligibleFloors.push(i);
				}
			} else {
				eligibleFloors.push(i);
			}
		}
	}

	console.log(eligibleFloors);
	return eligibleFloors.length;
}

function isPrime(num) {
	for (let i = 2; i < num; i++) if (num % i === 0) return false;
	return num > 1;
}

countEligibleFloors(68);