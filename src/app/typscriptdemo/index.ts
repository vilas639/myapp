console.log("hellow world");

var num:number;
num=10;
console.log("num")

var numbe1=23
var name1="Raju";
var status1=true;

console.log(name1);

var datan:any;
console.log(typeof datan);

datan="Mohan";
console.log(typeof datan);

datan=10;
console.log(typeof datan);

datan=false;

console.log(typeof datan);

let data1={id:1,name:"raju"};
console.log(data1);
console.log(typeof data1);

let user=
{
  id:1,
  name:"raju",
  salary:30000,
  address:{
    street:"panvel",
    city:"mum"
  }
}

console.log(user.address.city);

export class Addres1 {
    city:any;
    state:any;
    pincode:any;

    Addres1(city:string,state:string,pincode:number)
    {
    this.city=city;
    this.state=state;
    this.pincode=pincode;
    }


}
interface IBill{
  getbillgenration():void;
  getbillgenration1():number;
}

enum myname
{
  PERUNIT=200
}

export class Student1 {
   id1=10;
  name1="raju";
  salary1=30000;
  address=Addres1;

  Student1(id1:any,name1:any,salary1:any,address1:Addres1)
  {
    this.id1=id1;
    this.name1=name1;
    this.salary1=salary1;
    this.address=Addres1;
  }

  getstudentinfo():void
  {
    console.log(this.id1);
    console.log(this.name1);
    console.log(this.salary1);

  }
}

//call the api
var s=new Student1();
s.getstudentinfo();
console.log(s.getstudentinfo());


