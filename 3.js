const bIndo = 70;
const bIng = 70;
const mtk = 70;
const ipa = 70;

// check all value is not empty
if (!bIndo || !bIng || !mtk || !ipa) {
	return console.log("Semua nilai harus terisi!");
}

// calculate average
const average = (bIndo + bIng + mtk + ipa) / 4;

/* 
average 90 - 100 = A
average 80 - 89 = B
average 70 - 79 = C
average 60 - 69 = D
average 0 - 59 = E
*/

if (average >= 90 && average <= 100) {
	console.log(`Rata-rata: ${average}`);
	console.log("Grade = A");
} else if (average >= 80 && average < 90) {
	console.log(`Rata-rata: ${average}`);
	console.log("Grade = B");
} else if (average >= 70 && average < 80) {
	console.log(`Rata-rata: ${average}`);
	console.log("Grade = C");
} else if (average >= 60 && average < 70) {
	console.log(`Rata-rata: ${average}`);
	console.log("Grade = D");
} else if (average >= 0 && average < 60) {
	console.log(`Rata-rata: ${average}`);
	console.log("Grade = E");
} else {
	console.log("Nilai tidak valid!");
}
