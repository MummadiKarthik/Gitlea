 
  let s={
    name:"karthik",
    id:24
} 

if(!Function.prototype.bind){
    Function.prototype.bind=function(context,...args){
        let display=this;

        return function(){
         display.call(context,...args);
        }
    }
}
function bros(name,age){
console.log("name is "+name+" and age is "+age)
}
let p=bros.bind(s,"karthik",45)
p()
 
function bro(a){
    return function(b){
        return function(c){
            return a+b+c;

        }

    }

}
bro(24)(24)(24)
 