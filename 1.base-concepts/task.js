"use strict"

function solveEquation(variableA, variableB, variableC) {
	let arr = [];
	let discriminant = variableB ** 2 - 4 * variableA * variableC;

	if (discriminant > 0) {
		let root1 = (-variableB + Math.sqrt(discriminant)) / (2 * variableA);
		let root2 = (-variableB - Math.sqrt(discriminant)) / (2 * variableA);
		arr.push(root1, root2);
	} else if (discriminant === 0) {
		let root1 = -variableB / (2 * variableA);
		arr.push(root1);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let loanBody = amount - contribution;
	let percentagePerMonth = percent / 100 / 12;
	let payment;
	let credit;

	payment = loanBody * (percentagePerMonth + (percentagePerMonth / (((1 + percentagePerMonth) ** countMonths) - 1)));
	credit = (payment * countMonths);
	
	return +credit.toFixed(2);
}