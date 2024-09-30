let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

function mergeTwoList(arrayOfNumbers) {
    let odd = [];
    let even = [];

    for (let i = 0; i < arrayOfNumbers.length; i++){
        if (arrayOfNumbers[i] % 2 === 0) {
            even.push(arrayOfNumbers[i]);
        }
        else {
            odd.push(arrayOfNumbers[i]);
        }
    }
    return odd.concat(even)
}

console.log(mergeTwoList([1,2,33,10,20,4]));

