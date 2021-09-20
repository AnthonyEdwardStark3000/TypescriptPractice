var userinputdata;
userinputdata = 100;
// console.log(userinputdata);
userinputdata = "Random name";
// console.log(userinputdata);
usrname: String;
if (typeof userinputdata == 'string') {
    this.usrname = userinputdata;
    console.log("Assigned with name:" + this.usrname);
}
// error
//this function just return "never" data type
function myOwnError(m, c) {
    // console.log("An error of"+m+"with code "+c+" has occoured");
    // throw{m,c}; //this is the function code that provides error
    // infinite loop
    while (true) {
        console.log("one");
    }
}
var nevervalueCheck = myOwnError("created error", 300);
console.log("Checking the return type of my created error");
console.log(typeof (nevervalueCheck));
console.log(nevervalueCheck);
