"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x1;
	let x2;
	let D = b ** 2 - 4 * a * c;

	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(x1, x2);
	} else if (D === 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let arr = [];
	let S = amount - contribution;
	let P = percent / 100 / 12;
	let payment;
	let credit;

	if (amount > 0) {
		payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
		credit = (payment * countMonths);
		arr.push(credit.toFixed(2));
	} else if (amount <= 0) {
		arr.push(Error);
	}
	return arr;
}