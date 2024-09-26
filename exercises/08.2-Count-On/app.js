let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let i = 0; i < myArray.length; i++) {
    let item = myArray[i];
    if (typeof(item) === "object") {
        hello.push(item);
    }
}

console.log(hello)
