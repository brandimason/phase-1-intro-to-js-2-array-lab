// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats, name];
}

function prependCat(name){
    return [name, ...cats]
}


function removeLastCat(){
    const coolCats =[...cats];
    coolCats.pop();
    return coolCats;
}

function removeFirstCat(){
    const coolCats =[...cats];
    coolCats.shift();
    return coolCats;
}