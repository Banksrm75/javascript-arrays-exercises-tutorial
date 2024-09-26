let arr = [45,67,87,23,5,32,60];
let newArray = [];

for(let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
}

console.log(newArray);