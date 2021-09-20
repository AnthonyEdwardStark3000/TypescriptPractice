dummydata:undefined;

let simple:(a:number,b:number)=>number;
// let simple;
simple=add;
// simple=printdata;
// simple=100; weakness of TS

function addAndHandle(n1:number,n2:number,cb: (num: number)=> void)
{

    const result= n1+n2;
    cb(result);
    // return result;
    
}


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
console.log("Passing an anonymous function as argument : and 10 and 90 :"+addAndHandle(10,90,(result)=>{
    console.log(result);
}));
