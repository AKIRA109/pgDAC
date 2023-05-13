function p1(){
    // function f1(){
    //     console.log("p1----->f1\n");
    // } does not work
    this.f1=()=>{ console.log("p1----->f1\n")};
}
function p2(){
    // function f1(){
    //     console.log("p2----->f1\n");
    // }   
    // function f2(){
    //     console.log("p2----->f2\n");
    // }
    this.f2=()=>{ console.log("p2----->f2\n")};
}
function p3(){
    // function f1(){
    //     console.log("p3----->f1\n");
    // }
    // function f2(){
    //     console.log("p3----->f2\n");
    // }    
    // function f3(){
    //     console.log("p3----->f3\n");
    // }
    this.f3=()=>{ console.log("p3----->f3\n")};
}
p2.prototype=new p3();
p1.prototype=new p2();
let obj1=new p1();
obj1.f1();
obj1.f2();
obj1.f3();
console.log(obj1);
console.log(Object.getPrototypeOf(obj1))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(obj1)))