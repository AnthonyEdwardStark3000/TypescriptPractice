function add(n1:number,n2:number,p:string,showr:boolean)
{
    if(showr)
    {
    const ans=n1+n2;
    console.log(p+ans);
    }
}

let number1:number,number2=20,phrase="Result is:",show=true;
number1=2980;
add(number1,number2,phrase,show);