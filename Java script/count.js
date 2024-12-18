//  let num=2345789;
//  let count=0;
// while(num>1){
//     num=num/10;
//     count++;
// }
// console.log("count is :",count);

let num=2345789;
let count=0;
while(num>0){
    num=Math.floor(num/10);
    count++;
}
console.log("count is :",count);