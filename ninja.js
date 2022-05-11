class Ninja{
    constructor(name){
        this.name = name
        this.health = 80
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(this.name)
        return this
    }

    showStats() {
        this.sayName()
        console.log(`strength: ${this.strength}`)
        console.log(`speed: ${this.speed}`)
        console.log(`health: ${this.health}`)
        return this
    }

    drinkShake(){
        console.log(`${this.name} drank shake!`)
        return this.health > 100 ?
            this.health = 100 : this.health += 10
        // or
        // console.log(`${this.name} drank shake!`)
        // this.health += 10 
        }
    
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
console.log("*****************");
ninja1.showStats();
console.log("*****************");
ninja1.drinkShake();
console.log("*****************");
ninja1.showStats();