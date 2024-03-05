console.log("Hello World");


let trainer1 = { name: 'Enzo', region: 'Kalos',
speak: function(target){
    console.log(`You are challenged by Trainer ${target.name}`);
    console.log(`Trainer ${target.name} sends out Charizard`);
    console.log(`Go Greninja!`); }
};

let trainer2 = { name: 'Miguel', region: 'Kanto' };

function Pokemon(name, health, attack, level){
this.name = name;
this.basehealth = health;
this.health = 2 * health;
this.attack = attack;
this.level = level;
this.atk = function(target){
    console.log(`${this.name} used Water Shuriken on ${target.name}`);
    console.log('It is Super Effective!');
    target.health -= this.attack;
    console.log(`${target.name}'s health is reduced to ${Math.max(0, target.health)}`); };


this.atk2 = function(target){
    console.log(`${this.name} used Flamethrower on ${target.name}`);
    console.log('It is Not Very Effective...');
    target.health -= this.attack;
    console.log(`${target.name}'s health is reduced to ${Math.max(0, target.health)}`); };

this.levelUp = function(target) {
    console.log(`${this.name} has leveled up! ${this.level} -> ${this.level + 1}`);
    console.log(`HP: ${this.basehealth} -> ${this.basehealth + 4}`);
    console.log(`ATK: ${this.attack} -> ${this.attack + 60}`);
    this.level++;
    this.health += 4;
    this.attack += 60;
  };
}

let Greninja = new Pokemon('Greninja', 344, 257, 99);
let Charizard = new Pokemon('Charizard', 266, 155, 100);

trainer1.speak(trainer2);


 while (Greninja.health > 0 && Charizard.health > 0) {


Greninja.atk(Charizard);


if (Charizard.health <= 0) {
    console.log(`${Charizard.name} fainted!`);
    Greninja.levelUp();
    console.log('Trainer Enzo wins! Trainer Enzo receives 5000 Pokemon dollars for winning!')
    break; 
}


Charizard.atk2(Greninja);


if (Greninja.health <= 0) { console.log(`${Greninja.name} fainted!`); break; }
}





