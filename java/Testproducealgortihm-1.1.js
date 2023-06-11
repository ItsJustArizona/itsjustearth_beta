const latitude = sessionStorage.latitude;
const longitude = sessionStorage.longitude;

//Establish Latitude For Farms
const Farm_NorthernCalifornia_Lat = 11;
const Farm_CentralCalifornia_Lat = 11;
const Farm_SouthernCalifornia_Lat = 11;
const Farm_Georgia_Lat = 11;
const Farm_Florida_Lat = 11;
const Farm_EastWashington_Lat = 47.260;
const Farm_Michoacan_Mexico_Lat = 19.167832662;

//Establish Longitude For Farms
const Farm_NorthernCalifornia_Long = 11;
const Farm_CentralCalifornia_Long = 11;
const Farm_SouthernCalifornia_Long = 11;
const Farm_Georgia_Long = 11;
const Farm_Floria_Long = 11;
const Farm_EastWashington_Long = -118.896;
const Farm_Michoacan_Mexico_Long = -101.89;

//Establish Weights per Load of Produce in tons
const w_apple = 21;
const w_avacado = 20;

//Establish Carbon Dioxide of Transpertation System (Grams per ton-mile)
const t_truck = 161.8;

//Establish Carbon Dioxide output of Storage facitly
const store_output = 317;


//Get Date of Month
const get = new Date();
var date = get.getMonth() + 1;


//January 
if (date == 1){
var d_Farm_NorthernCalifornia = Math.sqrt((latitude-Farm_NorthernCalifornia_Lat)^2 + (longitude-Farm_NorthernCalifornia_Long)^2);
var d_Farm_CentralCalifornia = Math.sqrt((latitude-Farm_CentralCalifornia_Lat)^2 + (longitude-Farm_CentralCalifornia_Long)^2);
var d_Farm_SouthernCalifornia = Math.sqrt((latitude-Farm_SouthernCalifornia_Lat)^2 + (longitude-Farm_SouthernCalifornia_Long)^2);
var d_Farm_Georgia = Math.sqrt((latitude-Farm_Georgia_Lat)^2+(longitude-Farm_Georgia_Long)^2);
var d_Farm_EastWashington = Math.sqrt((latitude-Farm_EastWashington_Lat)^2+(longitude-Farm_EastWashington_Long)^2);

    //Apple
    var beta = (d_Farm_EastWashington * w_apple * t_truck)/1000000; //This is now in metric tons of CO2 also Emissions from transportation
    var phi = (intake_apple/beta);
    var zeta = amount_apple * co_apple * .75; //Carbon equivelence of apples
    var mu = store_apple * 3; //Carbon emissions by storage
    var theta = mu - zeta; 
    var sigma = phi + theta;
    var gamma = (1518 * w_apple * t_truck)/1000000;
    var final = sigma/gamma;

    if(gamma <= 1){
        //insert html
        var apple = document.getElementById('apple-id');
        apple.innerHTML('code for appple');
        
    }

    else {
        //dont insert html
        var apple = document.getElementById('apple-id');
        
        apple.style.display = "none";
        

    }


}


//February
else if (date == 2){

}

//March
else if (date == 3){

}

//April
else if (date == 4){

}

//May
else if (date == 5){

}

//June
else if (date == 6){

}

//July
else if (date == 7){

}

//August
else if (date == 8){

}

//September
else if (date == 9){

}

//October
else if (date == 10){

}

//November
else if (date == 11){
    

}

//December
else if (date == 12){
    //Start of Establishing Farms
  
    //East Washington
    const x_EastWashington = Math.abs(latitude-Farm_EastWashington_Lat);
    const y_EastWashington = Math.abs(longitude-Farm_EastWashington_Long);
    const r_EastWashington = x_EastWashington*69;
    const w_EastWashington = y_EastWashington*54.3;
    const u_EastWashington = Math.pow(r_EastWashington, 2);
    const o_EastWashington = Math.pow(w_EastWashington, 2);
    const dd_EastWashington = u_EastWashington + o_EastWashington;
    var d_Farm_EastWashington = Math.sqrt(dd_EastWashington);

    //Michoacan Mexico
    const x_Michoacan_Mexico = Math.abs(latitude-Farm_Michoacan_Mexico_Lat);
    const y_Michoacan_Mexico = Math.abs(longitude-Farm_Michoacan_Mexico_Long);
    const r_Michoacan_Mexico = x_Michoacan_Mexico*69;
    const w_Michoacan_Mexico = y_Michoacan_Mexico*54.3;
    const u_Michoacan_Mexico = Math.pow(r_Michoacan_Mexico, 2);
    const o_Michoacan_Mexico = Math.pow(w_Michoacan_Mexico, 2);
    const dd_Michoacan_Mexico = u_Michoacan_Mexico + o_Michoacan_Mexico;
    var d_Farm_Michoacan_Mexico = Math.sqrt(dd_Michoacan_Mexico);



    //End of Establishing Farms


    //Apple
    var beta = (d_Farm_EastWashington * w_apple * t_truck)/1000000; //This is now in metric tons of CO2 also Emissions from transportation
    var store_output_calc = store_output * 2;
    var feta = beta + store_output_calc;
    var gamma = (1300 * w_apple * t_truck)/1000000;
    var final = beta/gamma;

    if(final <= 1){
        //insert html
        document.getElementById('apple').innerHTML = 'Apples -> Taste may be not as rich due to cold storage';
        

    }

    else {
        //dont insert html
        document.getElementById('apple').innerHTML = final;
        

    }

    //Avacado
    var beta_1 = (d_Farm_Michoacan_Mexico * w_avacado * t_truck)/1000000;
    var store_output_calc_1 = store_output * 0;
    var feta_1 = beta_1 + store_output_calc_1;
    var gamma_1 = (1300 * w_avacado * t_truck)/1000000;
    var final_1 = feta_1/gamma_1;

    if(final_1 <= 1){
      document.getElementById('avacado').innerHTML = d_Farm_Michoacan_Mexico;
    }

    else{
      document.getElementById('avacado').style.display = "none";
    }
    
    

}

else{
    location.replace("#")
    

}

//for testing delete later



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