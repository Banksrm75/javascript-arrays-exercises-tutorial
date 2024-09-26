let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
let searchablePar = par.toLowerCase();

for(let i = 0; i < searchablePar.length; i++) {
    let char = searchablePar[i];
    if (char != " "){
        if (!counts[char]) {
            counts[char] = 0;
        }
        counts[char]++;
    }    
}

console.log(counts);
