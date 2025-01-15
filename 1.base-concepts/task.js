"use strict"

function solveEquation(variableA, variableB, variableC) {
	let arr = [];
	let root1;
	let root2;
	let discriminant = variableB ** 2 - 4 * variableA * variableC;

	if (discriminant > 0) {
		root1 = (-variableB + Math.sqrt(discriminant)) / (2 * variableA);
		root2 = (-variableB - Math.sqrt(discriminant)) / (2 * variableA);
		arr.push(root1, root2);
	} else if (discriminant === 0) {
		root1 = -variableB / (2 * variableA);
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
		alert(Number(credit.toFixed(2)));
	}
	return credit;
}