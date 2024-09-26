let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    for (let i= 0; i < firstArray.length; i++){
        newArray.push(firstArray[i]);
    }
    for (let i= 0; i < secondArray.length; i++){
        newArray.push(secondArray[i]);
    }
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));
