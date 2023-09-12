 function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     console.log("It is loading the js file");
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }