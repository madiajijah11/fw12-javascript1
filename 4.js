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
		lowerCaseWords += word.toLowerCase();
	}

	// reverse words with loop
	let reverseWords = "";
	for (const word of lowerCaseWords) {
		reverseWords = word + reverseWords;
	}

	// check if words is palindrome
	return lowerCaseWords === reverseWords ? "Palindrome" : "Bukan Palindrome";
};

console.log(palindrome("Kasur Rusak")); // Palindrome
console.log(palindrome("Sanbercode")); // Bukan Palindrome
console.log(palindrome("Haji Ijah")); // Palindrome
console.log(palindrome("takut")); // Bukan Palindrome
