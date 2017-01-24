var testAmount01 = 5.00;
var testAmount02 = 10.24;
var testAmount03 = 0.99;
var quarters = 0;
var quartersRemainder = 0;
var dimes = 0;
var dimesRemainder = 0;
var nickles = 0;
var nicklesRemainder = 0;
var pennies = 0;
var penniesRemainder = 0;


function changeCalculator(amount){
    var timesHundred = amount*100;
    quarters = Math.floor(timesHundred / 25);
    quartersRemainder = timesHundred % 25;
    
    if (quartersRemainder > 0){
        dimes = Math.floor(quartersRemainder / 10);
        dimesRemainder = quartersRemainder % 10;
    }
    
    if (dimesRemainder > 0){
        nickles = Math.floor(dimesRemainder / 5);
        nicklesRemainder = dimesRemainder % 5;
    }
    
    pennies = Math.floor(nicklesRemainder);
    
    var result = { 
        "Quarters:": quarters, 
        "Dimes:": dimes,
        "Nickles:": nickles,
        "Pennies:": pennies
    };
    
    return result;
}

// Tests

var result1 = changeCalculator(testAmount01);
console.log(result1);
var expected1 = { 
        "Quarters:": 20, 
        "Dimes:": 0,
        "Nickles:": 0,
        "Pennies:": 0
    };
console.log(expected1);
   
var result2 = changeCalculator(testAmount02);
var expected2 = { 
        "Quarters:": 40, 
        "Dimes:": 2,
        "Nickles:": 0,
        "Pennies:": 4
    };
var result3 = changeCalculator(testAmount03);
var expected3 = { 
        "Quarters:": 3, 
        "Dimes:": 2,
        "Nickles:": 1,
        "Pennies:": 4
    };

if (result1.toString() === expected1.toString()){
    console.log("Test #1 Passed!");
}
else {
    console.log("Test #1 Failed!");
    console.log("Tried with " + testAmount01);
    console.log("Expected to get: " + expected1);
    console.log("Instead, got: " + result1);
}

console.log("\nMoving onto Test #2...\n");
/*
if (result2.sort().toString() === [0, 8, 9, 9].toString()){
    console.log("Test #2 Passed!");
}
else {
    console.log("Test #2 Failed!");
    console.log("Tried with [0, 10, 10, 9, 9, 8]");
    console.log("Expected to get: 0,9,9,8");
    console.log("Instead, got: " + result2);
}*/