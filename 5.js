/* function change character a to o */
const switchCharacter = (city) => {
	// check if city is not a string
	if (typeof city !== "string") {
		return "Data harus berupa string!";
	}

	let cityName = "";
	let result = "";

	// loop through city
	for (const oldName of city) {
		// check if city name has a character and change it to o character and push it to cityName variable
		cityName = oldName === "a" ? "o" : oldName;
		// push cityName variable to result variable
		result += cityName;
	}

	return result;
};

console.log(switchCharacter("jakarta"));
