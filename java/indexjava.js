//Getting Location 
var z = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  
  } 
  else {
    location.replace("Noresponse.html");
  }
}

//Storing Location in Session Storage
function showPosition(position) {
    sessionStorage.setItem('latitude', position.coords.latitude);
    sessionStorage.setItem('longitude', position.coords.longitude);
    
    const latitude = sessionStorage.latitude;
const longitude=sessionStorage.longitude;

//Constants for Coordinates of North East Tip of U.S.
const delta1 = 47.391958333333335;
const delta2 = 41.814144444444445;
const delta3 = 41.814144444444445;
const delta4 = 43.6734157407;
const gamma1 = -66.86186944444444;
const gamma2 = -82.71196111111111;
const gamma3 = -66.86186944444444;
const gamma4 = -72.1452333333;

//Used for Location Gathering
//Delta and Gamma 4-6 are the center of the final triangle! We are using a method of triangualtion to understand
//where a person is on the north east coast next to and above Toronto

const x = Math.abs(latitude-delta1);
const xx = Math.abs(latitude-delta2);
const xxx = Math.abs(latitude-delta3);
const xxxx = Math.abs(delta1 - delta4);
const xxxxx = Math.abs(delta2 - delta4);
const xxxxxx = Math.abs(delta3 - delta4);
const y = Math.abs(longitude - gamma1);
const yy = Math.abs(longitude-gamma2);
const yyy = Math.abs(longitude-gamma3);
const yyyy = Math.abs(gamma1 - gamma4);
const yyyyy = Math.abs(gamma2 - gamma4);
const yyyyyy = Math.abs(gamma3 - gamma4);
const xr = x*69;
const xxr = xx*69;
const xxxr = xxx*69;
const xxxxr = xxxx*69;
const xxxxxr = xxxxx*69;
const xxxxxxr = xxxxxx*69;
const yr = y*54.3;
const yyr = yy*54.3;
const yyyr = yyy*54.3;
const yyyyr = yyyy*54.3;
const yyyyyr = yyyyy*54.3;
const yyyyyyr = yyyyy*54.3;
const xu = Math.pow(xr, 2);
const xxu = Math.pow(xxr, 2);
const xxxu = Math.pow(xxxr, 2);
const xxxxu = Math.pow(xxxxr, 2);
const xxxxxu = Math.pow(xxxxxr, 2);
const xxxxxxu = Math.pow(xxxxxxr, 2);
const yu = Math.pow(yr, 2);
const yyu = Math.pow(yyr, 2);
const yyyu = Math.pow(yyyr, 2);
const yyyyu = Math.pow(yyyyr,2);
const yyyyyu = Math.pow(yyyyyr, 2);
const yyyyyyu = Math.pow(yyyyyyr, 2);
const dd1 = xu + yu;
const dd2 = xxu + yyu;
const dd3 = xxxu + yyyu;
const dd4 = xxxxu + yyyyu;
const dd5 = xxxxxu + yyyyyu;
const dd6 = xxxxxxu + yyyyyyu;
var d1 =  Math.sqrt(dd1);
var d2 = Math.sqrt(dd2);
var d3 = Math.sqrt(dd3);
var d4 = Math.sqrt(dd4);
var d5 = Math.sqrt(dd5);
var d6 = Math.sqrt(dd6);
const sumofall = d1+d2+d3;
const correct = d4+d5+d6;
const correct_1 = correct + 1;
const correct_2 = correct - 1;
if (longitude < -82.71218333333334 && longitude > -125.96513333333334 && latitude > 31.2479 && latitude < 48.854325 ){
    setTimeout(function() { 
        location.replace("testalg.html");}, 10500);}
else if (longitude < -82.71218333333334 && longitude > -66.86186944444444 && latitude < 41.814144444444445 && latitude > 25.220102777777775){
    setTimeout(function() { 
        location.replace("testalg.html");}, 10500);}
else if (correct_1 >= sumofall >= correct_2 || sumofall == correct){
    setTimeout(function() { 
        location.replace("testalg.html");}, 10500);}
else{
    setTimeout(function() { 
        location.replace("#outsideofuspage");}, 10500);}

    
    }

//Display Computer Animation after button click
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
//Display Glitch Animation
      function timeFunction(){
        setTimeout(function() {document.getElementById('transition')
        .style.display = "block";}, 6700)
      }

//Pop Up
function popup() {
    document.getElementById('popup').style.display = "none";
    document.getElementsByClassName('popupbutton').style.display = "none";
}

