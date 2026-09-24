function Animal(name){
    this.name = name;
}
Animal.prototype.speak = function(){
    console.log(this.name + ' makes a noise.');
}
function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}
Dog.prototype.speak = function(){
    console.log(this.name + ' barks.');
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;    

let s=new Animal('Rex');
s.speak(); // Output: Rex makes a noise.