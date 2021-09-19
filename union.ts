function combine(n1:number|string,n2:number|string,result:string)
{
    let answer:any;
    if(typeof n1==='number'&&typeof n2==='number')
    {
        console.log("number");
        answer=n1+n2;
        console.log("number"+answer);
    }
    else if(typeof n1==='string'&& typeof n2==='string')
    {
        answer=n1.toString()+n2.toString();
        // console.log("in the fucntion"+answer);
        return answer;
    }
    
    if(result==="as-number")
    {
        return +answer;
    }
    else{
        return answer;
    }

    console.log(answer)
    return answer;
}

let something1=10;
let something2=20;

let name1="suresh";
let name2="Babu";

let combiningnumber=combine(something1,something2,"as-number");
console.log("numberAdded :"+combiningnumber);
let combiningString=combine(name1,name2,"as-string");
console.log("String result :"+combiningnumber);