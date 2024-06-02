
numberRandom=Math.floor(Math.random() * 99999);
const date = new Date();
var time=10;

myInterval =setInterval(function() {
    time-=1;
   document.getElementById("time").innerText=time;
   if(time==0){
    clearInterval(myInterval);
}
   }, 1000);

   

console.log(numberRandom);
function send(){
    var nb=0;
    nb=document.getElementById("number").value;
    console.log(nb);
    if(nb<numberRandom){
        document.getElementById("message").innerText="inf";

        console.log("inf");
    }else
    if(nb>numberRandom){
        document.getElementById("message").innerText="sup";

        console.log("sup");

    }else 
    if (nb==numberRandom){
        document.getElementById("message").innerText="BRAVO!!!!!";

        console.log("BRAVO!!!!!")
    }
}



// program to display a text using setTimeout method
function counting() {
   time-=time;
   console.log(time);
}
