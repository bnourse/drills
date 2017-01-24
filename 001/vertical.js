var testArray = ["Cat", "Dog", "Horse", "Elephant", "Bird"];
var testArray02 = ["Hotdog", "Hamburger", "Brownie", "Steak", "Poptarts", "Candy", "Chocolate", "PeanutButterCups"];

function longestLength(lengthArray) {
    var currentLength = 0;
    var longest = 0;
    
    for(var i = 0; i < lengthArray.length; i++) {
        currentLength = lengthArray[i].length;
        
        if (currentLength > longest) {
            longest = lengthArray[i].length;
        }
        
    }
    return longest;
}

function addSpaces(inputArray, longest) {
    
    for (var i = 0; i < inputArray.length; i++){
        var spaceCount = longest - inputArray[i].length;
        
        for (var x = 0; x < spaceCount; x++){
            inputArray[i] = inputArray[i] + " ";
        }
    }
}

function vertical(inputArray){
    
    var longest = longestLength(inputArray);
    addSpaces(inputArray, longest);
    
    var final = ""; 
    
    var x = 0;
    
    for (x ; x < longest; x++){
        
        var y = 0;
        
        for (y; y < inputArray.length; y++){
            final = final + inputArray[y].charAt(x);
        }
        
        final = final + '\n';
    }
    
    return final;
}

var result = vertical(testArray);
//console.log(testArray02);
var result2 = vertical(testArray02);

console.log(result);
console.log(result2);