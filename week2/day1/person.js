class Person {
    constructor(n, f) {
        // name
        // favoriteFood
        this.name = n;
        this.favoriteFood = f;
        this.bestFriend = null;
    }
    greeting() {
        console.log(`Hi, my name is ${this.name}`);
    }
    makeAFriend(friend) {
        this.bestFriend = friend;
    }
}
class Party {
    constructor(host) {
        this.host = host;
        this.guests = [];
    }
    hostGreeting() {
        this.host.greeting();
    }
    addGuest(guest) {
        this.guests.push(guest);
    }
}
let robert = new Person("Robert", "Popcorn");
let matthew = new Person("Matthew", "Pork Chops");

let myParty = new Party(robert);
myParty.addGuest(matthew);