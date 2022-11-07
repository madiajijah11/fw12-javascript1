/* function change character a to o */
const switchCharacter = (city) => {
	// check if city is not a string
	if (typeof city !== "string") {
		return "Data harus berupa string!";
	}

	let result = "";
	// loop through city
	for (const cityName of city) {
		// if character is a, change it to o
		if (cityName === "a") {
			result += "o";
		} else if (cityName === "A") {
			result += "O";
		} else {
			result += cityName;
		}
	}

	return result;
};

console.log(switchCharacter("Jakarta"));
