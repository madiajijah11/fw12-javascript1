/* function check if the word is palindrome */
const palindrome = (words) => {
	// check if words have more than 2 characters
	if (words.length < 2) {
		return "Teks harus lebih dari 2 huruf!";
	}

	// reverse words with loop
	let reverseWords = "";
	for (let i = words.length - 1; i >= 0; i--) {
		reverseWords += words[i];
	}

	// check if words is a palindrome
	return words === reverseWords ? "Palindrome" : "Bukan Palindrome";
};

console.log(palindrome("takut"));
