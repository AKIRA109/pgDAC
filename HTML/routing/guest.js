import { Router } from "express";
import express from "express"
let pahune=Router();
export default pahune;


let guest = ['Rohit Sheety','Ganesh Gaitonde','Chalu Pandey','Jethalal Gada','Tarak Mehta'];
let indexedGuest=[];
//let count=0;

let localhost="Singham";
// Method=GET url="/" show the name of the host 
pahune.get("/",(req,res)=>{
    res.send(`These are ${localhost}'s Guests`) 
})

// Method = GET url ="/all" show all the names in the list with index
// ---- create a new array using arr.map ( (e,index)=>{ return index+"."+e}
pahune.get('/allGuest',(req,res)=>{
    indexedGuest=guest.map((currElement, index)=>{
        let name= (index+1)+'.'+currElement;
        return name;
    })
    return res.send(indexedGuest);    
})



// Method =POST url ="/addguest" pass a query parameter "guestname" add
// it to a guest array on server side
pahune.post('/addGuest',(req,res)=>{
    let length=guest.length+1;
    let g=req.query.addguest;
    let newGuest=length+'.'+g;
    indexedGuest.push(newGuest);
    guest.push(g);
    //count++;
    res.send("Guest Added to list sucessfully");
})


// Method = GET url="/guestcount show the total count of guests added already

pahune.get('/guestcount',(req,res)=>{
    res.send(`Total Guest in the list are ${guest.length}`);
   // res.send(`Recently added guest count : ${count} `);
})



// Method = PUT url="/changeguestname" pass two path parameters the first
// one is the index of the name already in the list and second one is the
// changedname . Change the name on the specified index


pahune.put('/changeguestname/:gname/:gindex',(req,res)=>{
    if(!(req.params.gindex>guest.length)){
        guest[req.params.gindex] = req.params.gname;
        res.send(guest[req.params.gindex]);    
    }else{
        res.send("Index is not valid please enter index below or equal to " + guest.length)
    }
})

pahune.use(express.json())
pahune.delete('/removeGuest',(req,res)=>{
    //let gname= req.body.guestName
    let index = req.body.guestNo 
    console.log(index)
    console.log(typeof(index))

    res.send(`Guest ${guest[index]} removed from List` )
    guest.splice(index,1);
})
