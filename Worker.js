 
// we have added a function to add two numbers
let s=(a,b)=>a+b;
console.log(s(24,34))

//closures

function outer(){
    let a=10;   
    function inner(){
        let b=20;
        console.log(a+b);
    }       
 return inner;
}
outer();

//use cases

function balance(initialBalance){
    let bal=initialBalance;

        return{
        deposit:function(amount){
            bal+=amount;
            console.log(`Deposited: ${amount}, New Balance: ${bal}`);
        },
        withdraw:function(amount){
            if(amount<=bal){
                bal-=amount;
                console.log(`Withdrawn: ${amount}, New Balance: ${bal}`);
            }
        },
             
            getBalance:function(){
                console.log(`Current Balance: ${bal}`);
            }   
        }
    }

let myAccount=balance(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.getBalance();
 
 //currying

 function multiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        } 
    }
 }
 let sa=multiply(2)(3)(4);
console.log(sa);

//for loop 

let zs={
    name:"John",    
    id:123, 
    role:"developer"


}
for(let i in zs){
    console.log(i+": "+zs[i]);
}

let ad=new Map([["karthik",1],["suresh",2],["rajesh",3]]);
 

for(let[key,value]of ad){
    console.log(key+": "+value);
}