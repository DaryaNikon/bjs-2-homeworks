"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let root1;
	let root2;
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant > 0) {
		root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
	} else if (discriminant === 0) {
		root1 = -b / (2 * a);
		arr.push(root1);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let S = amount - contribution;
	let P = percent / 100 / 12;
	let payment;
	let credit;

	if (amount > 0) {
		payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
		credit = (payment * countMonths);
		credit.push(Number(credit.toFixed(2)));
	} else if (amount <= 0) {
		credit.push(Error);
	}
	return credit;
}