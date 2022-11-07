/* function check if the word is palindrome */
const palindrome = (words) => {
	// check if words have more than 2 characters
	if (words.length <= 2) {
		return "Teks harus lebih dari 2 huruf!";
	}

	// if words has a space, remove it
	let newWords = "";
	for (const word of words) {
		newWords += word === " " ? "" : word;
	}

	// if newWords has capital letter, change it to lowercase
	let lowerCaseWords = "";
	for (const word of newWords) {
		switch (word) {
			case "A":
				lowerCaseWords += "a";
				break;
			case "B":
				lowerCaseWords += "b";
				break;
			case "C":
				lowerCaseWords += "c";
				break;
			case "D":
				lowerCaseWords += "d";
				break;
			case "E":
				lowerCaseWords += "e";
				break;
			case "F":
				lowerCaseWords += "f";
				break;
			case "G":
				lowerCaseWords += "g";
				break;
			case "H":
				lowerCaseWords += "h";
				break;
			case "I":
				lowerCaseWords += "i";
				break;
			case "J":
				lowerCaseWords += "j";
				break;
			case "K":
				lowerCaseWords += "k";
				break;
			case "L":
				lowerCaseWords += "l";
				break;
			case "M":
				lowerCaseWords += "m";
				break;
			case "N":
				lowerCaseWords += "n";
				break;
			case "O":
				lowerCaseWords += "o";
				break;
			case "P":
				lowerCaseWords += "p";
				break;
			case "Q":
				lowerCaseWords += "q";
				break;
			case "R":
				lowerCaseWords += "r";
				break;
			case "S":
				lowerCaseWords += "s";
				break;
			case "T":
				lowerCaseWords += "t";
				break;
			case "U":
				lowerCaseWords += "u";
				break;
			case "V":
				lowerCaseWords += "v";
				break;
			case "W":
				lowerCaseWords += "w";
				break;
			case "X":
				lowerCaseWords += "x";
				break;
			case "Y":
				lowerCaseWords += "y";
				break;
			case "Z":
				lowerCaseWords += "z";
				break;
			default:
				lowerCaseWords += word;
				break;
		}
	}

	// reverse words with loop
	let reverseWords = "";
	for (let i = lowerCaseWords.length - 1; i >= 0; i--) {
		reverseWords += lowerCaseWords[i];
	}

	// check if words is palindrome
	return lowerCaseWords === reverseWords ? "Palindrome" : "Bukan Palindrome";
};

console.log(palindrome("Malam"));
console.log(palindrome("Kodok"));
console.log(palindrome("Kasur rusak"));

