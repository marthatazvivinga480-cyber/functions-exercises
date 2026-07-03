function greetGuest(name){
   return "welcome to movie night, " + name + "!";
}
function calculateTotalSnacks(numGuests) {

    return numGuests * 2;
}

function isEnoughPizza(numSlices, numGuests) {
    return numSlices >= numGuests * 3;
}
console.log(greetGuest("sam"));
console.log(calculateTotalSnacks(4));
console.log(isEnoughPizza(12, 4));
console.log(isEnoughPizza(10, 4)); 




/*const car = {
    year:"2023",
    model: "toyota",
    color: "red",

};
console.log(`${car.year} ${car.model} ${car.color}`); */







