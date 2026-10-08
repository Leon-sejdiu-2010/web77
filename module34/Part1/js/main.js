// function printname(){
// document.write("John");
// document.write("<br>");
// setTimeout(function(){document.write("ana");},3000);
// document.write("Bob");

// }
// printname();
var colors =['red','green','blue','purple']

function changeBgColor(){
    document.querySelector('body').style.background =
    colors[Math.floor(Math.random()*colors.length)]
}

var names =['John','Bob','Ana','Mark']

function changeNames(){
    document.querySelector('p').innerHTML =
    names[Math.floor(Math.random()*names.length)]
}
setInterval(changeBgColor,1000)
setInterval(changeNames,1000)