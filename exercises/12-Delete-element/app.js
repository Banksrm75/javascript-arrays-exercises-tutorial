let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

function deletePerson(name) {
    let filteredPeople = people.filter
    (function(person){
        return (person != name)
    });
    return filteredPeople
    
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
