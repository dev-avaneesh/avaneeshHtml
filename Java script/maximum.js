let arr=[21,-10,-20,15,100,1000];
let large=0;
for(let i=0;i<=arr.length;i++){
    if(large<arr[i]){
        large=arr[i];
    }
}
console.log(large);