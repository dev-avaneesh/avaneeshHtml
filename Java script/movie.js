let favMovie="avatar";
let guess=prompt("enter the favourite movie");
while(guess!=favMovie){
    console.log("wrong");
}
if(guess==favMovie){
    console.log("congratulations!");
}