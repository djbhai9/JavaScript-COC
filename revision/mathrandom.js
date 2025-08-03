const min = 10;
const max = 20;

// console.log(Math.random() * (max - min));
let arr = [];
for (let i = 0; i < max; i++) {
  arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(arr);
