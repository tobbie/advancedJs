class Elf{
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    
    attack(){
        return `attack with  ${this.weapon}`;
    }
}


const peter = new Elf('Peter', 'Fire');
const sam = new Elf('Samuel', 'Stones');


console.log(peter.attack());

console.log(sam.attack());

