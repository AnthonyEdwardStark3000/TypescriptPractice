dummydata:undefined;

let simple:(a:number,b:number)=>number;
// let simple;
simple=add;
// simple=printdata;
// simple=100; weakness of TS

function add(n1:number,n2:number)
{
    return n1+n2;
}

function printdata(number2:number):void
{
    console.log("The answer is:"+number2);
}

printdata(add(10,20));
console.log("result of result:"+printdata(add(10,20)));
console.log(add(10,30));
console.log(simple(2000,1000));
