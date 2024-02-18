let animal = {
    move: function() {
        console.log("The animal moves");
    }
};

let cat = Object.create(animal);

console.log("Animal:");
animal.move(); 

console.log("\nCat:");
cat.move(); 
