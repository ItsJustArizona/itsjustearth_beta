//Full Algorithem for It's Just Earth Sustianability Solutions
//All use of this code is available to use to anyone without making a profit
//This code MAY NOT be used for profit in any circumstances unless otherwise negotiated with by the ORIGINAL CREATOR
//If used in a published manner, please credit the original creator at the bottom of the page, Thank you!


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


function search_food() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('sort');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="block";                 
      }
  }
}

//Location Constants
const latitude = sessionStorage.latitude;
const longitude = sessionStorage.longitude;
document.getElementById('lat').innerHTML = latitude + " Latitude";
document.getElementById('long').innerHTML = longitude + " Longitude"

//Distance Constant
const distance_constant = 1300;

//Constants for Labor Index Scores
const US_LRI = 63.5;
const MEXICO_LRI = 74;
const GUATAMALA_LRI = 54;
const WESTINDIES_LRI = 60;
const max_LRI=100;

//Const for Country Alg of LIS
const US_Labor = US_LRI/max_LRI;
const MEXICO_Labor = MEXICO_LRI/max_LRI;
const GUATAMALA_Labor = GUATAMALA_LRI/max_LRI;
const WESTINDIES_Labor = WESTINDIES_LRI/max_LRI;

//Constants for Farmed Area Latutide
const North_Florida_Lat = 29.610114;
const South_Florida_Lat = 27.386582;
const California_SanJuaqiunValley_Lat = 38.232563;
const Georgia_Lat = 32.99881080659626;
const Nigiria_Lat = 9.612083563982322;
const Oregon_WiliametteValley_Lat = 45.02790872666384;
const Washington_YakimaValley_Lat = 46.4763017928325;
const Hawii_Lat = 19.812850;
const Mexico_Sinaloa_Lat = 24.99075233880642;
const Guatamala_Lat = 15.428460558705167;
const Maine_Lat = 45.22041710023313;
const WestIndies_Lat = 18.989859754274324;
const Mexico_Guerrero_Lat = 17.714972364811132;
const Mexico_Michoacan_Lat = 19.4568331335887;


//Constants for Farmed Area Longitude
const North_Florida_Long = -82.170591;
const South_Florida_Long = -81.493624;
const California_SanJuaqiunValley_Long = -121.848848;
const Georgia_Long = -83.28211850351413;
const Nigiria_Long = 7.571489725696424;
const Oregon_WiliametteValley_Long = -122.94387828281333;
const Washington_YakimaValley_Long = -120.2933155750662; 
const Hawii_Long = -155.495985;
const Mexico_Sinaloa_Long = -107.58465915589899;
const Guatamala_Long = -90.04587510825154;
const Maine_Long = -69.21618525844879;
const WestIndies_Long = -71.22022213826412;
const Mexico_Guerrero_Long = -99.95222439322228;
const Mexico_Michoacan_Long = -101.69635115063964;

///Distance Equations

//Northern Florida
const x_NorthernFlorida = Math.abs(latitude-North_Florida_Lat);
    const y_NorthernFlorida = Math.abs(longitude-North_Florida_Long);
    const r_NorthernFlorida = x_NorthernFlorida*69; //Convert into miles
    const w_NorthernFlorida = y_NorthernFlorida*54.3; //Convert into miles
    const u_NorthernFlorida = Math.pow(r_NorthernFlorida, 2);
    const o_NorthernFlorida = Math.pow(w_NorthernFlorida, 2);
    const dd_NorthernFlorida = u_NorthernFlorida + o_NorthernFlorida;
    var d_NorthernFlorida = Math.sqrt(dd_NorthernFlorida);
    const distance_NorthernFlorida = distance_constant/d_NorthernFlorida;
    sessionStorage.setItem('NorthernFlorida',distance_NorthernFlorida);
//Southern FLorida
const x_SouthernFlorida = Math.abs(latitude-South_Florida_Lat);
    const y_SouthernFlorida = Math.abs(longitude-South_Florida_Long);
    const r_SouthernFlorida = x_SouthernFlorida*69; //Convert into milesx_Nigiria
    const w_SouthernFlorida = y_SouthernFlorida*54.3; //Convert into miles
    const u_SouthernFlorida = Math.pow(r_SouthernFlorida, 2);
    const o_SouthernFlorida = Math.pow(w_SouthernFlorida, 2);
    const dd_SouthernFlorida = u_SouthernFlorida + o_SouthernFlorida;
    var d_SouthernFlorida = Math.sqrt(dd_SouthernFlorida);
    const distance_SouthernFlorida = distance_constant/d_SouthernFlorida;
    sessionStorage.setItem('SouthernFlorida',distance_SouthernFlorida);
//California_SanJuaqiunValley
const x_California_SanJuaqiunValley = Math.abs(latitude-California_SanJuaqiunValley_Lat);
    const y_California_SanJuaqiunValley = Math.abs(longitude-California_SanJuaqiunValley_Long);
    const r_California_SanJuaqiunValley = x_California_SanJuaqiunValley*69; //Convert into miles
    const w_California_SanJuaqiunValley = y_California_SanJuaqiunValley*54.3; //Convert into miles
    const u_California_SanJuaqiunValley = Math.pow(r_California_SanJuaqiunValley, 2);
    const o_California_SanJuaqiunValley = Math.pow(w_California_SanJuaqiunValley, 2);
    const dd_California_SanJuaqiunValley = u_California_SanJuaqiunValley + o_California_SanJuaqiunValley;
    var d_California_SanJuaqiunValley = Math.sqrt(dd_California_SanJuaqiunValley);
    const distance_SanJuaqiunValley = distance_constant/d_SouthernFlorida;
    sessionStorage.setItem('California_SanJuaqiunValley',distance_SanJuaqiunValley);
//Georgia
const x_Georgia = Math.abs(latitude-Georgia_Lat);
    const y_Georgia = Math.abs(longitude-Georgia_Long);
    const r_Georgia = x_Georgia*69; //Convert into miles
    const w_Georgia = y_Georgia*54.3; //Convert into miles
    const u_Georgia = Math.pow(r_Georgia, 2);
    const o_Georgia = Math.pow(w_Georgia, 2);
    const dd_Georgia = u_Georgia + o_Georgia;
    var d_Georgia = Math.sqrt(dd_Georgia);
    const distance_Georgia = distance_constant/d_Georgia;
    sessionStorage.setItem('Georgia',distance_Georgia);
//Nigiria
const x_Nigiria = Math.abs(latitude-Nigiria_Lat);
    const y_Nigiria = Math.abs(longitude-Nigiria_Long);
    const r_Nigiria = x_Nigiria*69; //Convert into miles
    const w_Nigiria = y_Nigiria*54.3; //Convert into miles
    const u_Nigiria = Math.pow(r_Nigiria, 2);
    const o_Nigiria = Math.pow(w_Nigiria, 2);
    const dd_Nigiria = u_Nigiria + o_Nigiria;
    var d_Nigiria = Math.sqrt(dd_Nigiria);
    const distance_Nigiria = distance_constant/d_Nigiria;
    sessionStorage.setItem('Nigiria',distance_Nigiria);
//Oregon_Wittama_Valley
const x_Oregon_WiliametteValley = Math.abs(latitude-Oregon_WiliametteValley_Lat);
    const y_Oregon_WiliametteValley = Math.abs(longitude-Oregon_WiliametteValley_Long);
    const r_Oregon_WiliametteValley = x_Oregon_WiliametteValley*69; //Convert into miles
    const w_Oregon_WiliametteValley = y_Oregon_WiliametteValley*54.3; //Convert into miles
    const u_Oregon_WiliametteValley = Math.pow(r_Oregon_WiliametteValley, 2);
    const o_Oregon_WiliametteValley = Math.pow(w_Oregon_WiliametteValley, 2);
    const dd_Oregon_WiliametteValley = u_Oregon_WiliametteValley + o_Oregon_WiliametteValley;
    var d_Oregon_WiliametteValley = Math.sqrt(dd_Oregon_WiliametteValley);
    const distance_WiliametteValley = distance_constant/d_Oregon_WiliametteValley;
    sessionStorage.setItem('WiliametteValley',distance_WiliametteValley);
//Washington_Yakima_Valley
const x_Washington_YakimaValley = Math.abs(latitude-Washington_YakimaValley_Lat);
    const y_Washington_YakimaValley = Math.abs(longitude-Washington_YakimaValley_Long);
    const r_Washington_YakimaValley = x_Washington_YakimaValley*69; //Convert into miles
    const w_Washington_YakimaValley = y_Washington_YakimaValley*54.3; //Convert into miles
    const u_Washington_YakimaValley = Math.pow(r_Washington_YakimaValley, 2);
    const o_Washington_YakimaValley = Math.pow(w_Washington_YakimaValley, 2);
    const dd_Washington_YakimaValley = u_Washington_YakimaValley + o_Washington_YakimaValley;
    var d_Washington_YakimaValley = Math.sqrt(dd_Washington_YakimaValley);
    const distance_YakimaValley = distance_constant/d_Washington_YakimaValley;
    sessionStorage.setItem('YakimaValley',distance_YakimaValley);
//Hawii
const x_Hawii = Math.abs(latitude-Hawii_Lat);
    const y_Hawii = Math.abs(longitude-Hawii_Long);
    const r_Hawii = x_Hawii*69; //Convert into miles
    const w_Hawii = y_Hawii*54.3; //Convert into miles
    const u_Hawii = Math.pow(r_Hawii, 2);
    const o_Hawii = Math.pow(w_Hawii, 2);
    const dd_Hawii = u_Hawii + o_Hawii;
    var d_Hawii = Math.sqrt(dd_Hawii);
    const distance_Hawii = distance_constant/d_Hawii;
    sessionStorage.setItem('Hawii',distance_Hawii);
//Mexico_Sinola
const x_Mexico_Sinola = Math.abs(latitude-Mexico_Sinaloa_Lat);
    const y_Mexico_Sinola = Math.abs(longitude-Mexico_Sinaloa_Long);
    const r_Mexico_Sinola = x_Mexico_Sinola*69; //Convert into miles
    const w_Mexico_Sinola = y_Mexico_Sinola*54.3; //Convert into miles
    const u_Mexico_Sinola = Math.pow(r_Mexico_Sinola, 2);
    const o_Mexico_Sinola = Math.pow(w_Mexico_Sinola, 2);
    const dd_Mexico_Sinola = u_Mexico_Sinola + o_Mexico_Sinola;
    var d_Mexico_Sinola = Math.sqrt(dd_Mexico_Sinola);
    const distance_Sinola = distance_constant/d_Mexico_Sinola;
    sessionStorage.setItem('Sinola',distance_Sinola);
//Guatamala
const x_Guatamala = Math.abs(latitude-Guatamala_Lat);
    const y_Guatamala = Math.abs(longitude-Guatamala_Long);
    const r_Guatamala = x_Guatamala*69; //Convert into miles
    const w_Guatamala = y_Guatamala*54.3; //Convert into miles
    const u_Guatamala = Math.pow(r_Guatamala, 2);
    const o_Guatamala = Math.pow(w_Guatamala, 2);
    const dd_Guatamala = u_Guatamala + o_Guatamala;
    var d_Guatamala = Math.sqrt(dd_Guatamala);
    const distance_Guatamala = distance_constant/d_Guatamala;
    sessionStorage.setItem('Guatamala',distance_Guatamala);
//Maine
const x_Maine = Math.abs(latitude-Maine_Lat);
    const y_Maine = Math.abs(longitude-Maine_Long);
    const r_Maine = x_Maine*69; //Convert into miles
    const w_Maine = y_Maine*54.3; //Convert into miles
    const u_Maine = Math.pow(r_Maine, 2);
    const o_Maine = Math.pow(w_Maine, 2);
    const dd_Maine = u_Maine + o_Maine;
    var d_Maine = Math.sqrt(dd_Maine);
    const distance_Maine = distance_constant/d_Maine;
    sessionStorage.setItem('Maine',distance_Maine);
//WestIndies
const x_WestIndies = Math.abs(latitude-WestIndies_Lat);
    const y_WestIndies = Math.abs(longitude-WestIndies_Long);
    const r_WestIndies = x_WestIndies*69; //Convert into miles
    const w_WestIndies = y_WestIndies*54.3; //Convert into miles
    const u_WestIndies = Math.pow(r_WestIndies, 2);
    const o_WestIndies = Math.pow(w_WestIndies, 2);
    const dd_WestIndies = u_WestIndies + o_WestIndies;
    var d_WestIndies = Math.sqrt(dd_WestIndies);
    const distance_WestIndies = distance_constant/d_WestIndies;
    sessionStorage.setItem('WestIndies',distance_WestIndies);
//Mexico_Guerrero
const x_Mexico_Guerrero = Math.abs(latitude-Mexico_Guerrero_Lat);
    const y_Mexico_Guerrero = Math.abs(longitude-Mexico_Guerrero_Long);
    const r_Mexico_Guerrero = x_Mexico_Guerrero*69; //Convert into miles
    const w_Mexico_Guerrero = y_Mexico_Guerrero*54.3; //Convert into miles
    const u_Mexico_Guerrero = Math.pow(r_Mexico_Guerrero, 2);
    const o_Mexico_Guerrero = Math.pow(w_Mexico_Guerrero, 2);
    const dd_Mexico_Guerrero = u_Mexico_Guerrero + o_Mexico_Guerrero;
    var d_Mexico_Guerrero = Math.sqrt(dd_Mexico_Guerrero);
    const distance_Guerrero = distance_constant/d_Mexico_Guerrero;
    sessionStorage.setItem('Guerrero',distance_Guerrero);
//Mexico_Michoacan
const x_Mexico_Michoacan = Math.abs(latitude-Mexico_Michoacan_Lat);
    const y_Mexico_Michoacan = Math.abs(longitude-Mexico_Michoacan_Long);
    const r_Mexico_Michoacan = x_Mexico_Michoacan*69; //Convert into miles
    const w_Mexico_Michoacan = y_Mexico_Michoacan*54.3; //Convert into miles
    const u_Mexico_Michoacan = Math.pow(r_Mexico_Michoacan, 2);
    const o_Mexico_Michoacan = Math.pow(w_Mexico_Michoacan, 2);
    const dd_Mexico_Michoacan = u_Mexico_Michoacan + o_Mexico_Michoacan;
    var d_Mexico_Michoacan = Math.sqrt(dd_Mexico_Michoacan);
    const distance_Michoacan = distance_constant/ d_Mexico_Michoacan;
    sessionStorage.setItem('Michoacan',distance_Michoacan);

//Constants for Calories Per Item
//
//Nuts
const almond_calorie = 7;
const walnut_calorie = 26;
const peanut_calorie = 11;
const cashew_calorie = 9.16;
const hazelnut_calorie = 9;
const macedamia_calorie = 19;
const pistachio_calorie = 4;
//Fruits
const apple_calorie = 95;
const tomato_calorie = 22;
const banana_calorie = 105;
const strawberry_calorie = 6;
const grape_calorie = 3;
const watermelon_calorie = 1371;
const orange_calorie = 66;
const blueberry_calorie = 1;
const lemon_calorie = 17;
const peach_calorie = 50;
const avacado_calorie = 240;
const pineapple_calorie = 452;
const cherry_calorie = 5.2;
const cantaloupe_calorie = 186;
const raspberry_calorie = 1;
const pear_calorie = 102;
const lime_calorie = 20;
const blackberry_calorie = 4.12;
const clementine_calorie = 34.8;

//Water Soil Moisture Constants
const moisture_average = 50;
const moisture_Florida_North = 90;
const moisture_Florida_South = 90;
const moisture_California_SanJuaqiunValley = 4;
const moisture_Georgia = 10;
const moisture_Nigira = 25;
const moisture_Oregon_WiliametteValley = 5;
const moisture_Washington_YakimaValley = 90;
const moisture_Hawii = 5;
const moisture_Mexico_Sinaloa = 20;
const moisture_Guatamala = 30;
const moisture_Maine = 30;
const moisture_WestIndies = 80;
const moisture_Mexico_Guerrero = 60;
const moisture_Mexico_Michoacan = 20;

//Water Needs (Singular Crop/L)
const water_apple = 20.765;
const water_tomato = 5.047;
const water_banana = 13.935;
const water_strawberry = 1.8;
const water_grape = 0.816;
const water_watermelon = 130;
const water_oranges = 23.2;
const water_blueberry = 0.442;
const water_lemon = 23.2;
const water_peach = 6.1;
const water_avacado = 38.14;
const water_pineapple = 1190;
const water_cherry = 0.45;


//Water Moisture Equations

const Florida_North_M = moisture_Florida_North / moisture_average;
const Florida_South_M = moisture_Florida_South / moisture_average;
const California_SanJuaqiunValley_M = moisture_California_SanJuaqiunValley / moisture_average;
const Georgia_M = moisture_Georgia / moisture_average;
const Nigira_M = moisture_Nigira / moisture_average;
const Oregon_WiliametteValley_M = moisture_Oregon_WiliametteValley / moisture_average;
const Washington_YakimaValley_M = moisture_Washington_YakimaValley / moisture_average;
const Hawii_M = moisture_Hawii / moisture_average;
const Mexico_Sinaloa_M = moisture_Mexico_Sinaloa / moisture_average;
const Guatamala_M = moisture_Guatamala / moisture_average;
const Maine_M = moisture_Maine / moisture_average;
const WestIndies_M = moisture_WestIndies / moisture_average;
const Mexico_Guerrero_M = moisture_Mexico_Guerrero / moisture_average;
const Mexico_Michoacan_M = moisture_Mexico_Michoacan / moisture_average;




///Water Equation
///(Calories(per,SingularItem)/Water(L))+(GrowSeasonSoilMoisture/50)

//Apple Water Constant
const alpha_water_apple = apple_calorie / water_apple;
const gamma_water_apple = alpha_water_apple + Washington_YakimaValley_M;
sessionStorage.setItem('applewater',alpha_water_apple);
//Tomato Water Constant
const alpha_water_tomato = tomato_calorie / water_tomato;
const gamma_water_tomato = alpha_water_tomato + Mexico_Sinaloa_M;
sessionStorage.setItem('tomatowater',alpha_water_tomato);
//Banana Water Constant
const alpha_water_banana = banana_calorie / water_banana;
const gamma_water_banana = alpha_water_banana + Guatamala_M;
sessionStorage.setItem('bananawater',alpha_water_banana);
//Strawberry Water Constant
const alpha_water_strawberry = strawberry_calorie / water_strawberry;
const gamma_water_strawberry = alpha_water_strawberry + California_SanJuaqiunValley_M;
sessionStorage.setItem('strawberrywater',alpha_water_strawberry);
//Grape Water Constant
const alpha_water_grape = grape_calorie / water_grape;
const gamma_water_grape = alpha_water_grape + California_SanJuaqiunValley_M;
sessionStorage.setItem('grapewater',alpha_water_grape);
//Watermelon Water Constant
const alpha_water_watermelon = watermelon_calorie / water_watermelon;
const gamma_water_watermelon = alpha_water_watermelon + Florida_North_M;
sessionStorage.setItem('watermelonwater',alpha_water_watermelon);
//Oranges Water Constant
const alpha_water_orange = orange_calorie / water_oranges;
const gamma_water_orange = alpha_water_orange + Florida_South_M;
sessionStorage.setItem('orangewater',alpha_water_orange);
//Blueberry Water Constant
const alpha_water_blueberry = blueberry_calorie / water_blueberry;
const gamma_water_blueberry = alpha_water_blueberry + Maine_M;
sessionStorage.setItem('blueberrywater',alpha_water_blueberry);
//Lemon Water Constant 
const alpha_water_lemon = lemon_calorie / water_lemon;
const gamma_water_lemon = alpha_water_lemon + California_SanJuaqiunValley_M;
sessionStorage.setItem('lemonwater',alpha_water_lemon);
//Peach Water Constant
const alpha_water_peach = peach_calorie / water_peach;
const gamma_water_peach = alpha_water_peach + California_SanJuaqiunValley_M;
sessionStorage.setItem('peachwater',alpha_water_peach);
//Avacado Water Constant
const alpha_water_avacado = avacado_calorie / water_avacado;
const gamma_water_avacado = alpha_water_avacado + Mexico_Michoacan_M;
sessionStorage.setItem('avacadowater',alpha_water_avacado);
//Pineapple Water Constant
const alpha_water_pineapple = pineapple_calorie / water_pineapple;
const gamma_water_pineapple = alpha_water_pineapple + WestIndies_M;
sessionStorage.setItem('pineapplewater',alpha_water_pineapple);
//Cherry Water Constant
const alpha_water_cherry = cherry_calorie / water_cherry;
const gamma_water_cherry = alpha_water_cherry + Washington_YakimaValley_M;
sessionStorage.setItem('cherrywater',alpha_water_cherry);
//Constants for Calories/Liter
const alpha_water_average = (alpha_water_apple + alpha_water_avacado + alpha_water_banana + alpha_water_blueberry + alpha_water_cherry + alpha_water_grape + alpha_water_lemon + alpha_water_orange + alpha_water_peach + alpha_water_pineapple + alpha_water_strawberry + alpha_water_tomato + alpha_water_watermelon)/13;
const water_average = alpha_water_average + 1;
//Full Algs
//Apple Full Alg
var applefullalg = distance_YakimaValley + US_Labor + gamma_water_apple;
sessionStorage.setItem('applealg',applefullalg);
//Tomato Full Alg
var tomatofullalg = distance_Sinola + MEXICO_Labor + gamma_water_tomato;
sessionStorage.setItem('tomatoalg',tomatofullalg);
//Banana Full Alg
var bananafullalg = distance_Guatamala + GUATAMALA_Labor + gamma_water_banana;
sessionStorage.setItem('bananaalg',bananafullalg);
//Strawberry Full Alg
var strawberryfullalg = distance_SanJuaqiunValley + US_Labor + gamma_water_strawberry;
sessionStorage.setItem('strawberryalg',strawberryfullalg);
//Grape Full Alg
var grapefullalg = distance_SanJuaqiunValley + US_Labor + gamma_water_grape;
sessionStorage.setItem('grapealg',grapefullalg);
//Watermelon Full Alg
var watermelonfullalg = distance_NorthernFlorida + US_Labor + gamma_water_watermelon;
sessionStorage.setItem('watermelonalg',watermelonfullalg);
//Orange Full Alg
var orangefullalg = distance_SouthernFlorida + US_Labor + gamma_water_orange;
sessionStorage.setItem('orangealg',orangefullalg);
//Blueberry Full Alg
var blueberryfullalg = distance_Maine + US_Labor + gamma_water_blueberry;
sessionStorage.setItem('blueberryalg',blueberryfullalg);
//Lemon Full Alg
var lemonfullalg = distance_SanJuaqiunValley + US_Labor + gamma_water_lemon;
sessionStorage.setItem('lemonalg',lemonfullalg);
//Peach Full Alg
var peachfullalg = distance_SanJuaqiunValley + US_Labor + gamma_water_peach;
sessionStorage.setItem('peachalg',peachfullalg);
//Avacado Full Alg
var avacadofullalg = distance_Michoacan + MEXICO_Labor + gamma_water_avacado;
sessionStorage.setItem('avacadoalg',avacadofullalg);
//Pineapple Full Alg
var pineapplefullalg = distance_WestIndies + WESTINDIES_Labor + gamma_water_pineapple;
sessionStorage.setItem('pineapplealg',pineapplefullalg);
//Cherry Full Alg
var cherryfullalg = distance_YakimaValley + US_Labor + gamma_water_cherry;
sessionStorage.setItem('cherryalg',cherryfullalg);
//Averages of Full Alg
var averagefullalg = (applefullalg + tomatofullalg + bananafullalg + strawberryfullalg + grapefullalg + watermelonfullalg + orangefullalg + blueberryfullalg + lemonfullalg + peachfullalg + avacadofullalg + pineapplefullalg + cherryfullalg)/13;
var averagefullalghalf = averagefullalg * 1.5;
var averageconstant = 1 + 1 + water_average;
var averageconstanthalf = averageconstant * 1.5;
var averageconstantbottomhalf = averageconstant * 0.6;

///Sustianability Check
//Apple
if(averageconstanthalf<=applefullalg){
    document.getElementById('apple').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Apples | <a href  = "yakimavalley.html"> Distance</a> From Source: ' + Math.round(10*d_Washington_YakimaValley)/10 + ' miles';
  }
  else if(averageconstant<=applefullalg){
    document.getElementById('apple').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Apples | <a href  = "yakimavalley.html"> Distance</a> From Source: ' + Math.round(10*d_Washington_YakimaValley)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=applefullalg){
    document.getElementById('apple').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Apples | <a href  = "yakimavalley.html"> Distance</a> From Source: ' + Math.round(10*d_Washington_YakimaValley)/10 + ' miles';
  }
  else{
    document.getElementById('apple_alt').innerHTML = 'Apple | <b>Frozen Apple</b> - Instead of - "Fresh" Produce';
    document.getElementById('apple').style.display = "none";
  }
//Tomato
if(averageconstanthalf<=tomatofullalg){
    document.getElementById('tomato').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Tomatos | <a href  = "sinolamexico.html"> Distance</a> From Source: ' + Math.round(10*d_Mexico_Sinola)/10 + ' miles';
  }
  else if(averageconstant<=tomatofullalg){
    document.getElementById('tomato').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Tomatos | <a href  = "sinolamexico.html"> Distance</a> From Source: ' + Math.round(10*d_Mexico_Sinola)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=tomatofullalg){
    document.getElementById('tomato').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Tomatos | <a href  = "sinolamexico.html"> Distance</a> From Source: ' + Math.round(10*d_Mexico_Sinola)/10 + ' miles';
  }
  else{
    document.getElementById('tomato_alt').innerHTML = 'Tomato | <b>Canned Tomatos</b> - Instead of - "Fresh" Produce';
    document.getElementById('tomato').style.display = "none";
  }
//Banana
if(averageconstanthalf<=bananafullalg){
    document.getElementById('banana').innerHTML = gamma_water_banana + '<div style="color:#B2AC88; display: inline;">&uarr;</div> Bananas | <a href  = "guatamala.html"> Distance</a> From Source: ' + Math.round(10*d_Guatamala)/10 + ' miles';
  }
  else if(averageconstant<=bananafullalg){
    document.getElementById('banana').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Bananas | <a href  = "guatamala.html"> Distance</a> From Source: ' + Math.round(10*d_Guatamala)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=bananafullalg){
    document.getElementById('banana').innerHTML = '<div style="color:#8F1111 display: inline;">&darr;</div> Bananas | <a href  = "guatamala.html"> Distance</a> From Source: ' + Math.round(10*d_Guatamala)/10 + ' miles';
  }
  else{
    document.getElementById('banana_alt').innerHTML = 'Banana | <b>Frozen Bananas</b> - Instead of - "Fresh" Produce';
    document.getElementById('banana').style.display = "none";
  }
//Strawberry
if(averageconstanthalf<=strawberryfullalg){
    document.getElementById('strawberry').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Strawberries | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley/10) + ' miles';
  }
  else if(averageconstant<=strawberryfullalg){
    document.getElementById('strawberry').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Strawberries | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=strawberryfullalg){
    document.getElementById('strawberry').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Strawberries | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley)/10 + ' miles';
  }
  else{
    document.getElementById('strawberry_alt').innerHTML = 'Strawberry | <b>Frozen Strawberries</b> - Instead of - "Fresh" Produce';
    document.getElementById('strawberry').style.displa = "none";
  }
//Grape
if(averageconstanthalf<=grapefullalg){
    document.getElementById('grape').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Grapes | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley/10) + ' miles';
  }
  else if(averageconstant<=grapefullalg){
    document.getElementById('grape').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Grapes | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=grapefullalg){
    document.getElementById('grape').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Grapes | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley)/10 + ' miles';
  }
  else{
    document.getElementById('grape_alt').innerHTML = 'Grape | <b>Frozen Strawberries</b> - Instead of - "Fresh" Produce';
    document.getElementById('grape').style.display = "none";
  }
//Watermelon
if(averageconstanthalf<=watermelonfullalg){
    document.getElementById('watermelon').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Watermelons | <a href  = "northernflorida.html"> Distance</a> From Source: ' + Math.round(10*d_NorthernFlorida/10) + ' miles';
  }
  else if(averageconstant<=watermelonfullalg){
    document.getElementById('watermelon').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Watermelons | <a href  = "northernflorida.html"> Distance</a> From Source: ' + Math.round(10*d_NorthernFlorida)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=watermelonfullalg){
    document.getElementById('watermelon').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Watermelons | <a href  = "northernflorida.html"> Distance</a> From Source: ' + Math.round(10*d_NorthernFlorida)/10 + ' miles';
  }
  else{
    document.getElementById('watermelon_alt').innerHTML = 'Watermelon | <b>Frozen Watermelon</b> - Instead of - "Fresh" Produce';
    document.getElementById('watermelon').style.display = "none";
  }
//Orange
if(averageconstanthalf<=orangefullalg){
    document.getElementById('orange').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Oranges | <a href  = "southernflorida.html"> Distance</a> From Source: ' + Math.round(10*d_SouthernFlorida/10) + ' miles';
  }
  else if(averageconstant<=orangefullalg){
    document.getElementById('orange').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Oranges | <a href  = "southernflorida.html"> Distance</a> From Source: ' + Math.round(10*d_SouthernFlorida)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=orangefullalg){
    document.getElementById('orange').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Oranges | <a href  = "southernflorida.html"> Distance</a> From Source: ' + Math.round(10*d_SouthernFlorida)/10 + ' miles';
  }
  else{
    document.getElementById('orange_alt').innerHTML = 'Orange | <b>Frozen Strawberries</b> - Instead of - "Fresh" Produce';
    document.getElementById('orange').style.display = "none";
  }
//Blueberry
if(averageconstanthalf<=blueberryfullalg){
    document.getElementById('blueberry').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Blueberries | <a href  = "penobscotbay.html"> Distance</a> From Source: ' + Math.round(10*d_Maine/10) + ' miles';
  }
  else if(averageconstant<=blueberryfullalg){
    document.getElementById('blueberry').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Blueberries | <a href  = "penobscotbay.html"> Distance</a> From Source: ' + Math.round(10*d_Maine)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=blueberryfullalg){
    document.getElementById('blueberry').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Blueberries | <a href  = "penobscotbay.html"> Distance</a> From Source: ' + Math.round(10*d_Maine)/10 + ' miles';
  }
  else{
    document.getElementById('blueberry_alt').innerHTML = 'Blueberry | <b>Frozen Strawberries</b> - Instead of - "Fresh" Produce';
    document.getElementById('blueberry').style.display = "none";
  }
//Lemon
if(averageconstanthalf<=lemonfullalg){
    document.getElementById('lemon').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Lemons | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley/10) + ' miles';
  }
  else if(averageconstant<=lemonfullalg){
    document.getElementById('lemon').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Lemons | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=lemonfullalg){
    document.getElementById('lemon').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Lemons | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley)/10 + ' miles';
  }
  else{
    document.getElementById('lemon_alt').innerHTML = 'Lemons | <b>Frozen Strawberries</b> - Instead of - "Fresh" Produce';
    document.getElementById('lemon').style.display = "none";
  }

//Peach
if(averageconstanthalf<=peachfullalg){
    document.getElementById('peach').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Peaches | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley/10) + ' miles';
  }
  else if(averageconstant<=peachfullalg){
    document.getElementById('peach').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Peaches | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=peachfullalg){
    document.getElementById('peach').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Peaches | <a href  = "sanjua.html"> Distance</a> From Source: ' + Math.round(10*d_California_SanJuaqiunValley)/10 + ' miles';
  }
  else{
    document.getElementById('peach_alt').innerHTML = 'Peach | <b>Frozen Peaches</b> - Instead of - "Fresh" Produce';
    document.getElementById('peach').style.display = "none";
  }
//Avacado
if(averageconstanthalf<=avacadofullalg){
    document.getElementById('avacado').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Avacados | <a href  = "michoacan.html"> Distance</a> From Source: ' + Math.round(10*d_Mexico_Michoacan/10) + ' miles';
  }
  else if(averageconstant<=avacadofullalg){
    document.getElementById('avacado').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Avacados | <a href  = "michoacan.html"> Distance</a> From Source: ' + Math.round(10*d_Mexico_Michoacan)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=avacadofullalg){
    document.getElementById('avacado').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Avacados | <a href  = "michoacan.html"> Distance</a> From Source: ' + Math.round(10*d_Mexico_Michoacan)/10 + ' miles';
  }
  else{
    document.getElementById('avacado_alt').innerHTML = 'Avacado | <b>Frozen Strawberries</b> - Instead of - "Fresh" Produce';
    document.getElementById('avacado').style.display = "none";
  }
//Pineapple
if(averageconstanthalf<=pineapplefullalg){
    document.getElementById('pineapple').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Pineapples | <a href  = "westindies.html"> Distance</a> From Source: ' + Math.round(10*d_WestIndies/10) + ' miles';
  }
  else if(averageconstant<=pineapplefullalg){
    document.getElementById('pineapple').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Pineapples | <a href  = "westindies.html"> Distance</a> From Source: ' + Math.round(10*d_WestIndies)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=pineapplefullalg){
    document.getElementById('pineapple').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Pineapples | <a href  = "westindies.html"> Distance</a> From Source: ' + Math.round(10*d_WestIndies)/10 + ' miles';
  }
  else{
    document.getElementById('pineapple_alt').innerHTML = 'Pineapple | <b>Frozen Pineapple</b> - Instead of - "Fresh" Produce';
    document.getElementById('pineapple').style.clear = "none";
  }
//Cherry
if(averageconstanthalf<=cherryfullalg){
    document.getElementById('cherry').innerHTML = '<div style="color:#B2AC88; display: inline;">&uarr;</div> Cherries | <a href  = "yakimavalley.html"> Distance</a> From Source: ' + Math.round(10*d_Washington_YakimaValley/10) + ' miles';
  }
  else if(averageconstant<=cherryfullalg){
    document.getElementById('cherry').innerHTML = '<div style="color:#e5cd84; display: inline;">=</div> Cherries | <a href  = "yakimavalley.html"> Distance</a> From Source: ' + Math.round(10*d_Washington_YakimaValley)/10 + ' miles';
  }
  else if(averageconstantbottomhalf<=cherryfullalg){
    document.getElementById('cherry').innerHTML = '<div style="color:#8F1111; display: inline;">&darr;</div> Cherries | <a href  = "yakimavalley.html"> Distance</a> From Source: ' + Math.round(10*d_Washington_YakimaValley)/10 + ' miles';
  }
  else{
    document.getElementById('cherry_alt').innerHTML = 'Cherry | <b>Frozen Strawberries</b> - Instead of - "Fresh" Produce';
    document.getElementById('cherry').style.display = "none";
  }






//Copywrite Its Just Earth 2023
//In association with Space Gnomes Co
//An Arizona Original Software


