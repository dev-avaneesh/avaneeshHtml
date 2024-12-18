let num=1234;
 let sum=0;
let count=0;
while(num>0){
    count=num%10;
    num=Math.floor(num/10);
    sum=sum+count;
}
console.log("sum is :",sum);