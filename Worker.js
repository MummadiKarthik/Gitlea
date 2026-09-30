let i=0;
function kar(){
    setInterval(()=>{
        i++;
        postMessage(i);
    },100)
}
kar()

let sa=[1,45,235,6];
let a=sa.sort((a,b)->b-a);
console.log(sa)
// we have added a function to add two numbers
let s=(a,b)=>a+b;
console.log(s(24,34))

