/* function change character a to o */
const switchCharacter = (city) => {
	// check if city is not a string
	if (typeof city !== "string") {
		return "Data harus berupa string!";
	}

	let result = "";
	// loop through city
	for (const cityName of city) {
		// if character is "a" or "A", change it to "o" or "O"
		if (cityName === "a") {
			result += "o";
		} else if (cityName === "A") {
			result += "O";
		} else {
			// if character is not "a" or "A", add it to result
			result += cityName;
		}
	}

	return result;
};

console.log(switchCharacter("Jakarta")); // Jokorto
console.log(switchCharacter("Bandung")); // Bondung
console.log(switchCharacter("Surabaya")); // Suroboyo
