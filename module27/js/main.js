function kthesms(){
    alert("Ky eshte nje funksion qe kthen  nje sms")
}
kthesms();
//parametra qe na ndihmojn per
function sum(num1,num2,num3){// ti treguar funksion sefar vlera pret
    return num1+num2+num3;
}
 console.log(sum(2,5,7));

 function kthemiminutat (minutat){
    return minutat *60;
 }
 console.log(kthemiminutat(4));


var car={
 name:"bmw",
 color:"red",
 year:2024,
 km:1000,
//ni funksion mbrenda objektit quhet metode
 startEngine:function(){
   alert("vroom!");
 },
 get getKm(){
    return this.km;
 },
  set  setkim(km){
    this.km=km;
  }


};
console.log(car.getKm);

car.setkim=0;

console.log(car.getKm);

var school={
 name:"digital school",
 subject:"programim",
 studenta:2000,
 year:1000,
};

alert(school.name);

var Pc= new Object();
 Pc.name="lenovo"; 
 Pc.cpu="intel core i9";
 Pc.ram="16GB";

 Pc.type=function(){
    return this.name + " , " +this.cpu + " " + this.ram + " ";
 }

 alert(Pc.type());
//konstruktor i cili na ndihmon qe te kemi nje shabllon per te krijuar objekte te cilat kan
//atribute  te nbjejta por vlera e tyre ndryshon
 function pc(name,cpu,ram,gpu){
    this.name=name;
    this.cpu=cpu;
    this.ram=ram;
    this.gpu=gpu;
 }
 var c1=new pc("mac","8-core","8gb","5600M");
 var c2=new pc("mac2","8-core","18gb","5600M");