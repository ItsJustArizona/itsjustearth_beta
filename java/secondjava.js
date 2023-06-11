

//Logo Change Code
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logolead")
        .style.display = "none";
    document.getElementById("logofollow")
        .style.display = "block";
  } else {
    document.getElementById("logolead")
        .style.display = "block";
    document.getElementById("logofollow")
        .style.display = "none";
  }
}


//Collapsable Code
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}