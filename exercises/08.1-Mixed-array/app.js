let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let mixArrayDataTypes = [];

for(let i = 0; i < mix.length; i++) {
    let DataType = typeof(mix[i]);
    mixArrayDataTypes.push(DataType);
}

console.log(mixArrayDataTypes);
