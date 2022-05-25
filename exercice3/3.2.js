const tab1 = [1, 2, 3, 4];
const tab2 = [100, 100, 100];
let sum = 0;
let moyenne = 0
let sum2 = 0
let moyenne2 = 0

for (let i = 0; i < tab1.length; i++) {
    sum += tab1[i];
    moyenne = sum / tab1.length
}
console.log(moyenne);

for (let i = 0; i < tab2.length; i++) {
    sum2 += tab2[i];
    moyenne2 = sum2 / tab2.length
}
console.log(moyenne2);