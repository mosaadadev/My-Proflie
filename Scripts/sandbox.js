// this is how you open and close the nav bar on the mobile-----------------------------------------------------------------------------------------
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


// this block of code makes the font weight bigger when you on a that page. ----------------------------------------------------------------------
var header = document.getElementsByClassName("menus");
var btns = document.getElementsByClassName("home");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active"; 
  });
}