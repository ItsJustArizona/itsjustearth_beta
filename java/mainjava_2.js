var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
//Colorado State University
  if (position.coords.latitude > 40.56888611111111 && position.coords.latitude < 40.57823055555557 && position.coords.longitude > -105.09583333333333 && position.coords.longitude < -105.07885833333333) {     
    setTimeout(function() {
      location.replace("testalg.html");
    }, 10500);
  }

  //Fort Collins Section 1 (North of Colorado State University)
  else if(position.coords.latitude > 40.57823055555557 && position.coords.latitude < 40.59575277777778 && position.coords.longitude > -105.09583333333333 && position.coords.longitude < -105.07885833333333){
    setTimeout(function() {
      location.replace("#");
    }, 10500);
  }

//Fort Collins Section 2 (East of Colorado State University)
  else if (position.coords.latitude > 40.523269444444445 && position.coords.latitude < 40.59575277777778 && position.coords.longitude > -105.07885833333332 && position.coords.longitude < -105.01990555555555) {
    setTimeout(function() {
      location.replace("#");
    }, 10500);
  }
//Fort Collins Section 3 (South of Colorado State University)
  else if (position.coords.latitude > 40.523269444444445 && position.coords.latitude < 40.56888611111111 && position.coords.longitude > -105.09583333333333 && position.coords.longitude < -105.07885833333333){
    setTimeout(function() {
      location.replace("#");
    }, 10500);
  }

//Fort Collins Section 4 (West of Colorado State University)
  else if (position.coords.latitude > 40.523269444444445 && position.coords.latitude < 40.59575277777778 && position.coords.longitude > -105.13344444444445 && position.coords.longitude < -105.09583333333333) {
    setTimeout(function() {
      location.replace("#");
    }, 10500);
  }

//Outskirts Between Fort Collins and Loveland
  //else if(position.coords.latitude > 40.453269444444445 && position.coords.latitude < 00){
    //setTimeout(function() {
      //location.replace("#");
    //}, 10500);
  //}

//Loveland (South Of Fort Collins)
  //else if(position.coords.latitude > 40.45129166666667 && position.coords.latitude < 40.453269444444445 && position.coords.longitude > -105.13579722222222 && position.coords.longitude < -105.13555555555556){
    //setTimeout(function() {
      //location.replace("#");
    //}, 10500);
  //}

//Test Home
  //else if(position.coords.latitude > 40 && position.coords.latitude < 40.6 && position.coords.longitude > -105.1 && position.coords.longitude < -105.08){
    //setTimeout(function() {
      //location.replace("#");
    //}, 10500);
  //}

//No Results Found
else{
      setTimeout(function(){
        location.replace("Noresponse.html");
        }, 10500);
  
        }
    
  }

  

function show() {

  document.getElementById('invisimage1')
          .style.display = "block";
  
  document.getElementById('invisimage2')
          .style.display = "block";

  document.getElementById('btnID')
          .style.display = "none"; 
  
  document.getElementById('typeout')
      .style.display = "none";
  
  document.getElementById('computer')
      .style.display = "block"; 

}

function timeFunction(){
  setTimeout(function() {document.getElementById('transition')
  .style.display = "block";}, 6700)
}