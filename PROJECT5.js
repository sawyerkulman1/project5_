/**
 *   @author kulman, Sawyer  (Kulmans@gmail.com)
 *   @version 0.0.3
 *   @summary Proj 5 code || created: 12.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let passengerNumber, passengerZones, calculateTicket;

function main() {
    setPassengerNumber();
    setPassengerZones();
    setCalculateTicket();
}

main();

function setPassengerNumber() {
    while (passengerNumber == null || passengerNumber > 4 || passengerNumber < 1) {
        passengerNumber = Number(PROMPT.question(`How many people will be riding the bus?`));
    }
}

function setPassengerZones() {
    while (passengerZones == null || passengerZones > 3 || passengerZones < 0) {
        passengerZones = Number(PROMPT.question(`How many zones would you like to ride through?`));
    }
}

function setCalculateTicket() {
    if (passengerNumber == 1 && passengerZones == 0) {
        console.log(`Your fee is $7.50.`);
    } else if (passengerNumber == 1 && passengerZones == 1) {
        console.log(`Your fee is $10.00`);
    } else if (passengerNumber == 1 && passengerZones == 2) {
        console.log('Your fee is $12.00');
    } else if (passengerNumber == 1 && passengerZones == 3) {
        console.log('Your fee is $12.75');
    } else if (passengerNumber == 2 && passengerZones == 0) {
        console.log('Your fee is $14.00');
    } else if (passengerNumber == 2 && passengerZones == 1) {
        console.log(`Your fee is $18.50`);
    } else if (passengerNumber == 2 && passengerZones == 2) {
        console.log('Your fee is $22.00');
    } else if (passengerNumber == 2 && passengerZones == 3) {
        console.log('Your fee is $23.00');
    } else if (passengerNumber == 3 && passengerZones == 0) {
        console.log('Your fee is $20.00');
    } else if (passengerNumber == 3 && passengerZones == 1) {
        console.log(`Your fee is $21.00`);
    } else if (passengerNumber == 3 && passengerZones == 2) {
        console.log('Your fee is $32.00');
    } else if (passengerNumber == 3 && passengerZones == 3) {
        console.log('Your fee is $33.00');
    } else if (passengerNumber == 4 && passengerZones == 0) {
        console.log('Your fee is $25.00');
    } else if (passengerNumber == 4 && passengerZones == 1) {
        console.log(`Your fee is $27.50`);
    } else if (passengerNumber == 4 && passengerZones == 2) {
        console.log('Your fee is $36.00');
    } else if (passengerNumber == 4 && passengerZones == 3) {
        console.log('Your fee is $37.00');
    }
}
