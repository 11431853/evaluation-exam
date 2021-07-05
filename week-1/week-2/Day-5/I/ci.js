/*
The compund interest formula is
A = P(1 + R/100)**n
CI = A - P
*/

var principal = 10000; // This is the Pricipal amount
var rate = 7; // This is the rate in percent per anuum
var time = 4; // This is the time in years

var amount = principal*(1 + rate/100)**time; // This is the formula for Tota Amount
var compoundInterest = amount - principal; // This is the formula for calculating Compound Interest
console.log(compoundInterest);

