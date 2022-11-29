// Write your solution here!
let cats = [`Milo`, `Otis`, `Garfield`]

function destructivelyAppendCat(name =`Ralph`){

    return cats.push(name)
}
function destructivelyPrependCat(name = `Bob`){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    return cats.pop(`Garfield`)
}
function destructivelyRemoveFirstCat(){
    return cats.shift(`Milo`)
}
function appendCat(){
const appendCat = [...cats, `Broom`]
return appendCat

}
function prependCat(){
    const prependCat = [`Arnold`, ...cats]
    return prependCat
}
function removeLastCat(){
const removeLastCat = cats.slice(0,2)
return removeLastCat

}
function removeFirstCat(){
    const removeFirstCat = cats.slice(1)
    return removeFirstCat
}







