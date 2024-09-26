let arr = [4,5,734,43,45];
let randomInteger = 0;

for (let i = 0; i < 10; i++){
    randomInteger = Math.floor(Math.random() * 200)
    arr.push(randomInteger)
}

console.log(arr);
