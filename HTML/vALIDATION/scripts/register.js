let name,age,password,confirmPass,passStr,address,dob;
const date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
let year = date.getFullYear();
const region="pune";
function validate() {
    let a = document.forms.registeration.name.value;
    console.log(a)
    if(a.length<2 || a.trim()==""|| isNan(a)){
        name=false;
        alert("Name is Invalid");
    }
    else{
        name=true;
    }

//     let b = document.forms.registeration.age.value;
//     if(b < 18 || b<100){
//         age=false;
//         alert("Minimum Age Limit is 18");
//     }
//     else{
//         age=true;
//     }

    let c = document.forms.registeration.password.value;
    passStr=c;
    if(c.length<8 || c.trim()==""){
        password=false;
        alert("Password Criteria Not Meet");
    }
    else{
        address=true;
    }

    let d = document.forms.registeration.confirmPass.value;            
    if(c != d){
        confirmPass=false;
        alert("Passwords are Not Same");
    }
    else{
        confirmPass=true;
    }

   let e = document.forms.registeration.address1.value;                     
    if(e.indexOf(region)==-1){                 
        address=false;
        alert("Sorry Only for Pune Region");
    }
    else{                
        address=true;
    }


 f = document.forms.registeration.dob.value;       
 let g=new Date(f).getFullYear();        
if(year-g < 18 || year-g <100 ){
    dob=false;
    alert("You must be 18 or above to proceed!");
}
else{
   dob=true;
}
  
return name && age && password && confirmPass && address && dob;       
}