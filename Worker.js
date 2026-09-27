let i=0;
function kar(){
    setInterval(()=>{
        i++;
        postMessage(i);
    },100)
}
kar()

// we have added a function to add two numbers
let s=(a,b)=>a+b;
console.log(s(24,34))

