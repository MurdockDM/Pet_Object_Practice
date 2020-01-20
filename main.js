const moose = {
    name: "Moose",
    species: "dog",
    nicknames: ["Moosers", "Wiggles","Weirdo"],
    age: 8,
    favoriteToys: [],
    bark : function () {
        console.log("Woof Woof")
    },
    whine : function () {
        console.log("Whining noises")
    },
    eat : function () {
        console.log("(loud eating noises)")
    },
    play: function(toy){
        const toyType = toy.search(/squeaky/i);
        if (toyType === -1 ) {
            console.log(`${moose.name} does not like this toy`);
        } else if (toyType === 0 ) {
            this.favoriteToys.push(toy);
        }
    }
}

moose.bark();
moose.whine();
moose.eat();

moose.play("squeaky ball");
moose.play("stuffed mouse")

console.log(moose.favoriteToys);