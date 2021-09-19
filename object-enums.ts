
const admin=0;
const user=0;
// enum
enum login{user,author,controller}

// object
const something
// :{
//     myname:string;
//     myage:number
// }
=
{
    myname:'Stark',
    myage:21,
    myhobbies:["Coding","Practicing"],
    role:admin,
    log:login.author,
};

// printing object

console.log(something);
console.log(something.myhobbies[0]);

console.log(something.myname);
console.log(something.myage);

// another

let favourites:string[];
favourites=["Rolls royce","RDJ","SSR"];
// console.log("Fav:"+favourites[0]+" and "+favourites[1])
for(let fav of favourites)
{
    console.log(fav.toUpperCase());
}

// tuple
const example:{
    me:[string,number]
}={
me:["Stark",3000]
}

example.me.push('Anthony');

for(let n in example.me){
console.log(n);
}

if(something.role==admin)
{
    console.log("Logged in as admin")
}
else
{
    console.log("Logged in as user");
}

if(something.log==login.controller)
{
    console.log("Logged in as controller");
}
else if(something.log==login.author)
{
    console.log("Enum check:Logged in as author");
}

