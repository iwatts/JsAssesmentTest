const balancedbrackets = (str) => {
	let balanced = false;
	let brokenBracket = false;
	let usedBracketOrder = [];
	const strArray = str.split('');
	for (let i = 0; i < strArray.length; i++) {
		if(strArray[i] == '[' || strArray[i] == '{' || strArray[i] == '('){
			if(!usedBracketOrder.includes(strArray[i])) {
				usedBracketOrder.push(strArray[i])
			}
		}
		if(strArray[i] == ']' || strArray[i] == '}' || strArray[i] == ')'){
			lastUsed = usedBracketOrder.length - 1
			if(lastUsed < 0) {
				brokenBracket = true;
				break;
			}
			if(strArray[i] == usedBracketOrder[lastUsed]) {
				usedBracketOrder.pop()
			}
		}

		// )}]
	}
	if(!brokenBracket && usedBracketOrder.length == 0) {
		balanced = true;
	}
  return balanced; // return true if the brackets are balanced and false if they are not.
};

const testCases = [
  { brackets: "()", solution: true },
  { brackets: ")(", solution: false },
  { brackets: "{[()]}", solution: true },
  { brackets: "{[(])}", solution: false },
  { brackets: "{{[[(())]]}}", solution: true },
  { brackets: "[()]{}{[()()]()}", solution: true },
  { brackets: "{asdf{g[asdfecewa1[(d()a)]d]}s}", solution: true },
  { brackets: "{asdf{g[asdfec([]][])ewa1](d()a)[d]}s}", solution: false },
  { brackets: "(asdf{9(){}{()[]}g[asdfecewa1[(d()a)]d]}s})", solution: false },
  { brackets: "([]({{{[[()][]]}}})[{{{((([{}]))){[]{}}}}}])", solution: true },
  {
    brackets: "([]({{{[[()][]]}}})[{{{((([{})){[]{}}]){{}}}}}])",
    solution: false,
  },
];

for (let i = 0; i < testCases.length; i++) {
  console.log();
  if (balancedbrackets(testCases[i].brackets) == testCases[i].solution) {
    console.log("Test case: ", i, " Success!");
  } else {
    console.log("Test case: ", i, " Failure!");
  }
}
