/*implement*/
class Calculator {
  add(a, b, c) {
    if (c !== undefined) return a + b + c;
    if (b !== undefined) return a + b;
    return a;
  }
}

const calc = new Calculator();
console.log(calc.add(1, 2));    // 3
console.log(calc.add(1, 2, 3)); // 6

let adf=[234,12,45,67];
adf.filter((s)=>s%2==0?s:0)
let s=[25,12,58,36];
s.map((a)=>console.log(a))
