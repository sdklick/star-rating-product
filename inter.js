//star rating product

let a = "☆";
let b = "★";
let c = "✬";
let endingrate = 5;
let rating = 2.3;
let ratingarray = [];
let vaa = rating.toString();
let vaa1 = vaa.split(".");
let vaa2 = vaa1.map(Number);
for (let i = 1; i <= vaa2[0]; i++) {
  ratingarray.push(b);
}

if (vaa2.length == 2) {
  ratingarray.push(c);
}

if (ratingarray != endingrate) {
  let end = endingrate - ratingarray.length;
  for (let j = 0; j < end; j++) {
    ratingarray.push(a);
  }
}

let fiarray = ratingarray.join("");
console.log(fiarray);
