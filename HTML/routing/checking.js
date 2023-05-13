let guest = ['Rohit Sheety','Ganesh Gaitonde','Chalu Pandey','Jethalal Gada','Tarak Mehtha'];

let indexedGuest=guest.map((currElement, index)=>{
    let name= (index+1)+'.'+currElement;
    return name;
})



let length=guest.length+1;
// let g=req.query.addguest;
let newGuest=length+'.'+'natu kaka';
indexedGuest.push(newGuest);
//guest.push(indexedGuest);

function replace(gname,gindex) {   

    for (let i = 1; i  <guest.length; i++) {
        
        if(i==gindex){
            indexedGuest[gindex]=gindex+'.'+'gname';
        }
        else{
            console.log("Invalid Number Of Guest")
        }        
    }
}

console.log(indexedGuest);
replace(hello,1);
console.log(indexedGuest);