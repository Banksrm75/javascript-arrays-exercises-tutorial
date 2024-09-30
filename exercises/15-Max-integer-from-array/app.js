let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

let largestSoFar = 0;
function findMax(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (myArray[i] > largestSoFar){
            largestSoFar = myArray[i];
        }
    }
    return largestSoFar;
}

console.log(findMax(myArray));

