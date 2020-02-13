//Function constructors
function Elf(name, weapon){
    this.name =  name;
    this .weapon = weapon;
}

Elf.prototype.attack = function(){
    return `attack with ${this.weapon}`;
}

console.log(Elf.prototype);

const peter = new Elf('Peter', 'Fire');
const sam = new Elf('Samuel', 'Stones');

console.log(peter.attack());

console.log(sam.attack());