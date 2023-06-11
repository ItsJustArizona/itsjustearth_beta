const latitude = sessionStorage.latitude;
const longitude = sessionStorage.longitude;

//Establish Latitude For Farms
const Farm_NorthernCalifornia_Lat = 11;
const Farm_CentralCalifornia_Lat = 11;
const Farm_Georgia_Lat = 11;
const Farm_Florida_Lat = 11;
const Farm_EastWashington_Lat = 47.260;
const Farm_Michoacan_Mexico_Lat = 19.167832
const Farm_Yuma_Lat = 32.595847;
const Farm_ImperialValley_Lat = 32.837223124529814;
const Farm_SouthernFlorida_Lat = 25.68366311598367;


//Establish Longitude For Farms
const Farm_NorthernCalifornia_Long = 11;
const Farm_CentralCalifornia_Long = 11;
const Farm_Georgia_Long = 11;
const Farm_Floria_Long = 11;
const Farm_EastWashington_Long = -118.896;
const Farms_Michoacan_Mexico_Long = -101.89;
const Farm_Yuma_Long = -114.510603;
const Farm_ImperialValley_Long = -115.58010689304754;
const Farm_SouthernFlorida_Long = -80.55103724713511;

//Establish Weights per Load of Produce in tons
const w_apple = 21;
const w_avacado = 20;


//Establish Carbon Dioxide of Transpertation System (Grams per ton-mile)
const t_truck = 161.8;

//Establish City Lat
const FortCollins_Lat = 40.566456;

//Establish City Long
const FortCollins_Long = -105.07387;

//Establish Local Park Lat
const FortCollins_Rotary_Lat = 40.57356;
const Rockies_MorianePark_Lat = 40.36106;
const FortCollins_Oval_Lat = 40.576607255838155;
const FortCollins_CityPark_Lat = 40.584146296837226;
const FortCollins_Lori_Lat = 40.56439235551819;
const FortCollins_OTSquare_Lat = 40.587690;
const LoveLand_StatGard_Lat = 40.42245422012091;
const LoveLand_Sundance_Lat = 40.35075633477406;
const Jhonstown_Sunrise_Lat = 40.34245996845894;
const Jhonstown_ParishPark_Lat = 40.33659408246581;
const Jhonstown_Eddie_Lat = 40.33154447930797;


//Establish Local Park Long
const FortCollins_Rotary_Long = -105.15719;
const Rockies_MorianePark_Long = -105.58574;
const FortCollins_Oval_Long = -105.08109575951666;
const FortCollins_CityPark_Long = -105.10284888796302;
const FortCollins_Lori_Long = -105.17428355549521;
const FortCollins_OTSquare_Long = -105.075974;
const LoveLand_StatGard_Long = -105.09423246214924;
const LoveLand_Sundance_Long = -105.22310418641815;
const Jhonstown_Sunrise_Long = -104.91984474004977;
const Jhonstown_ParishPark_Long = -104.90897993763312;
const Jhonstown_Eddie_Long = -104.90687515607047;


//Establish State Park Lat
const Lori_Lat = 40.56439235551819;
const LoveLand_BoydLake_Lat = 40.435968;
const StVrain_Lat = 40.17140039598319;
const BarrLake_Lat = 39.93970529939669;
const EldCan_Lat = 39.92920063323126;


//Establish State Park Long
const Lori_Long = -105.17428355549521;
const LoveLand_BoydLake_Long = -105.036799;
const StVrain_Long = -104.99018849059338;
const BarrLake_Long = -104.74952998600746;
const EldCan_Long = -105.29341533738297;


//Establish Agri-tourism Lat

//Establish Agri-tourism Long

//Get Date of Month
const get = new Date();
var date = get.getMonth() + 1;


//Distance to city
const x_FortCollins = Math.abs(latitude-FortCollins_Lat);
    const y_FortCollins = Math.abs(longitude-FortCollins_Long);
    const r_FortCollins = x_FortCollins*69; //Convert into miles
    const w_FortCollins = y_FortCollins*54.3; //Convert into miles
    const u_FortCollins = Math.pow(r_FortCollins, 2);
    const o_FortCollins = Math.pow(w_FortCollins, 2);
    const dd_FortCollins = u_FortCollins + o_FortCollins;
    var d_FortCollins = Math.sqrt(dd_FortCollins);

    if (d_FortCollins <= 10){
      document.getElementById('Elevation').innerHTML = 'Elevation: 5000';
      document.getElementById('WaterSource').innerHTML = "City Water Source: Pouder River & Horsetooth Resivour";
    }

    else{
      document.getElementById('Elevation').innerHTML = d_FortCollins;
      document.getElementById('WaterSource').innerHTML = "Water Source Unavailable";
    }


//Dstance to Park

//Fort Collins, Rotary Park
const x_FortCollins_Rotary = Math.abs(latitude-FortCollins_Rotary_Lat);
    const y_FortCollins_Rotary = Math.abs(longitude-FortCollins_Rotary_Long);
    const r_FortCollins_Rotary = x_FortCollins_Rotary*69; //Convert into miles
    const w_FortCollins_Rotary = y_FortCollins_Rotary*54.3; //Convert into miles
    const u_FortCollins_Rotary = Math.pow(r_FortCollins_Rotary, 2);
    const o_FortCollins_Rotary = Math.pow(w_FortCollins_Rotary, 2);
    const dd_FortCollins_Rotary = u_FortCollins_Rotary + o_FortCollins_Rotary;
    var d_FortCollins_Rotary = Math.sqrt(dd_FortCollins_Rotary);

    if(d_FortCollins_Rotary <=10){
      document.getElementById('Rotary').innerHTML = 'Rotary Park ' + Math.round(10*d_FortCollins_Rotary)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + FortCollins_Rotary_Lat + ',' + FortCollins_Rotary_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

//Rockies, Moriane Park
const x_Rockies_MorianePark = Math.abs(latitude-Rockies_MorianePark_Lat);
    const y_Rockies_MorianePark = Math.abs(longitude-Rockies_MorianePark_Long);
    const r_Rockies_MorianePark = x_Rockies_MorianePark*69; //Convert into miles
    const w_Rockies_MorianePark = y_Rockies_MorianePark*54.3; //Convert into miles
    const u_Rockies_MorianePark = Math.pow(r_Rockies_MorianePark, 2);
    const o_Rockies_MorianePark = Math.pow(w_Rockies_MorianePark, 2);
    const dd_Rockies_MorianePark = u_Rockies_MorianePark + o_Rockies_MorianePark;
    var d_Rockies_MorianePark = Math.sqrt(dd_Rockies_MorianePark);

    if(d_Rockies_MorianePark <=10){
      document.getElementById('Moriane').innerHTML = 'Moriane Park ' + Math.round(10*d_Rockies_MorianePark)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + Rockies_MorianePark_Lat + ',' + Rockies_MorianePark_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

//Fort Collins, Oval (CSU)
  const x_FortCollins_Oval = Math.abs(latitude-FortCollins_Oval_Lat);
    const y_FortCollins_Oval = Math.abs(longitude-FortCollins_Oval_Long);
    const r_FortCollins_Oval = x_FortCollins_Oval*69; //Convert into miles
    const w_FortCollins_Oval = y_FortCollins_Oval*54.3; //Convert into miles
    const u_FortCollins_Oval = Math.pow(r_FortCollins_Oval, 2);
    const o_FortCollins_Oval = Math.pow(w_FortCollins_Oval, 2);
    const dd_FortCollins_Oval = u_FortCollins_Oval + o_FortCollins_Oval;
    var d_FortCollins_Oval = Math.sqrt(dd_FortCollins_Oval);

    if(d_FortCollins_Oval <=10){
      document.getElementById('FoCo_Oval').innerHTML = 'The Oval ' + Math.round(10*d_FortCollins_Oval)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + FortCollins_Oval_Lat + ',' + FortCollins_Oval_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

//Fort Collins, City Park
  const x_FortCollins_CityPark = Math.abs(latitude-FortCollins_CityPark_Lat);
    const y_FortCollins_CityPark = Math.abs(longitude-FortCollins_CityPark_Long);
    const r_FortCollins_CityPark = x_FortCollins_CityPark*69; //Convert into miles
    const w_FortCollins_CityPark = y_FortCollins_CityPark*54.3; //Convert into miles
    const u_FortCollins_CityPark = Math.pow(r_FortCollins_CityPark, 2);
    const o_FortCollins_CityPark = Math.pow(w_FortCollins_CityPark, 2);
    const dd_FortCollins_CityPark = u_FortCollins_CityPark + o_FortCollins_CityPark;
    var d_FortCollins_CityPark = Math.sqrt(dd_FortCollins_CityPark);

    if(d_FortCollins_CityPark <=10){
      document.getElementById('FoCo_CityPark').innerHTML = 'Fort Collins City Park ' + Math.round(10*d_FortCollins_CityPark)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + FortCollins_CityPark_Lat + ',' + FortCollins_CityPark_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

  //Fort Collins, Old Town Square
  const x_FortCollins_OTSquare = Math.abs(latitude-FortCollins_OTSquare_Lat);
    const y_FortCollins_OTSquare = Math.abs(longitude-FortCollins_OTSquare_Long);
    const r_FortCollins_OTSquare = x_FortCollins_OTSquare*69; //Convert into miles
    const w_FortCollins_OTSquare = y_FortCollins_OTSquare*54.3; //Convert into miles
    const u_FortCollins_OTSquare = Math.pow(r_FortCollins_OTSquare, 2);
    const o_FortCollins_OTSquare = Math.pow(w_FortCollins_OTSquare, 2);
    const dd_FortCollins_OTSquare = u_FortCollins_OTSquare + o_FortCollins_OTSquare;
    var d_FortCollins_OTSquare = Math.sqrt(dd_FortCollins_OTSquare);

    if(d_FortCollins_OTSquare <=10){
      document.getElementById('FoCo_OTSquare').innerHTML = 'Old Town Square ' + Math.round(10*d_FortCollins_OTSquare)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + FortCollins_OTSquare_Lat + ',' + FortCollins_OTSquare_Long + '"target = "_blank">Directions</a>';
    }
    else{
    } 

  //Loveland, Statue Garden
  const x_LoveLand_StatGard = Math.abs(latitude-LoveLand_StatGard_Lat);
    const y_LoveLand_StatGard = Math.abs(longitude-LoveLand_StatGard_Long);
    const r_LoveLand_StatGard = x_LoveLand_StatGard*69; //Convert into miles
    const w_LoveLand_StatGard = y_LoveLand_StatGard*54.3; //Convert into miles
    const u_LoveLand_StatGard = Math.pow(r_LoveLand_StatGard, 2);
    const o_LoveLand_StatGard = Math.pow(w_LoveLand_StatGard, 2);
    const dd_LoveLand_StatGard = u_LoveLand_StatGard + o_LoveLand_StatGard;
    var d_LoveLand_StatGard = Math.sqrt(dd_LoveLand_StatGard);

    if(d_LoveLand_StatGard <=10){
      document.getElementById('LoveLand_StatGard').innerHTML = 'Statue Garden ' + Math.round(10*d_LoveLand_StatGard)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + LoveLand_StatGard_Lat + ',' + LoveLand_StatGard_Long + '"target = "_blank">Directions</a>';
    }
    else{
    } 

  
  //Loveland, Sun dance Trail
  const x_LoveLand_Sundance = Math.abs(latitude-LoveLand_Sundance_Lat);
    const y_LoveLand_Sundance = Math.abs(longitude-LoveLand_Sundance_Long);
    const r_LoveLand_Sundance = x_LoveLand_Sundance*69; //Convert into miles
    const w_LoveLand_Sundance = y_LoveLand_Sundance*54.3; //Convert into miles
    const u_LoveLand_Sundance = Math.pow(r_LoveLand_Sundance, 2);
    const o_LoveLand_Sundance = Math.pow(w_LoveLand_Sundance, 2);
    const dd_LoveLand_Sundance = u_LoveLand_Sundance + o_LoveLand_Sundance;
    var d_LoveLand_Sundance = Math.sqrt(dd_LoveLand_Sundance);

    if(d_LoveLand_Sundance <=10){
      document.getElementById('LoveLand_Sundance').innerHTML = 'Sundance Trail Head ' + Math.round(10*d_LoveLand_Sundance)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + LoveLand_Sundance_Lat + ',' + LoveLand_Sundance_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

  //Jhonstown, Sunrise Park
  const x_Jhonstown_Sunrise = Math.abs(latitude-Jhonstown_Sunrise_Lat);
    const y_Jhonstown_Sunrise = Math.abs(longitude-Jhonstown_Sunrise_Long);
    const r_Jhonstown_Sunrise = x_Jhonstown_Sunrise*69; //Convert into miles
    const w_Jhonstown_Sunrise = y_Jhonstown_Sunrise*54.3; //Convert into miles
    const u_Jhonstown_Sunrise = Math.pow(r_Jhonstown_Sunrise, 2);
    const o_Jhonstown_Sunrise = Math.pow(w_Jhonstown_Sunrise, 2);
    const dd_Jhonstown_Sunrise = u_Jhonstown_Sunrise + o_Jhonstown_Sunrise;
    var d_Jhonstown_Sunrise = Math.sqrt(dd_Jhonstown_Sunrise);

    if(d_Jhonstown_Sunrise <=10){
      document.getElementById('Jhonstown_Sunrise').innerHTML = 'Sunrise Park ' + Math.round(10*d_Jhonstown_Sunrise)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + Jhonstown_Sunrise_Lat + ',' + Jhonstown_Sunrise_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

  //Jhonstown, Parish Park
  const x_Jhonstown_ParishPark = Math.abs(latitude-Jhonstown_ParishPark_Lat);
    const y_Jhonstown_ParishPark = Math.abs(longitude-Jhonstown_ParishPark_Long);
    const r_Jhonstown_ParishPark = x_Jhonstown_ParishPark*69; //Convert into miles
    const w_Jhonstown_ParishPark = y_Jhonstown_ParishPark*54.3; //Convert into miles
    const u_Jhonstown_ParishPark = Math.pow(r_Jhonstown_ParishPark, 2);
    const o_Jhonstown_ParishPark = Math.pow(w_Jhonstown_ParishPark, 2);
    const dd_Jhonstown_ParishPark = u_Jhonstown_ParishPark + o_Jhonstown_ParishPark;
    var d_Jhonstown_ParishPark = Math.sqrt(dd_Jhonstown_ParishPark);

    if(d_Jhonstown_ParishPark <=10){
      document.getElementById('Jhonstown_ParishPark').innerHTML = 'Parish Park ' + Math.round(10*d_Jhonstown_ParishPark)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + Jhonstown_ParishPark_Lat + ',' + Jhonstown_ParishPark_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }
  
  //Jhonstown, Eddie Park
  const x_Jhonstown_Eddie = Math.abs(latitude-Jhonstown_Eddie_Lat);
    const y_Jhonstown_Eddie = Math.abs(longitude-Jhonstown_Eddie_Long);
    const r_Jhonstown_Eddie = x_Jhonstown_Eddie*69; //Convert into miles
    const w_Jhonstown_Eddie = y_Jhonstown_Eddie*54.3; //Convert into miles
    const u_Jhonstown_Eddie = Math.pow(r_Jhonstown_Eddie, 2);
    const o_Jhonstown_Eddie = Math.pow(w_Jhonstown_Eddie, 2);
    const dd_Jhonstown_Eddie = u_Jhonstown_Eddie + o_Jhonstown_Eddie;
    var d_Jhonstown_Eddie = Math.sqrt(dd_Jhonstown_Eddie);

    if(d_Jhonstown_Eddie <=10){
      document.getElementById('Jhonstown_Eddie').innerHTML = 'Eddie Park ' + Math.round(10*d_Jhonstown_Eddie)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + Jhonstown_Eddie_Lat + ',' + Jhonstown_Eddie_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

//STATE PARKS

  //Fort Collins, Lori State Park
  const x_Lori = Math.abs(latitude-Lori_Lat);
    const y_Lori = Math.abs(longitude-Lori_Long);
    const r_Lori = x_Lori*69; //Convert into miles
    const w_Lori = y_Lori*54.3; //Convert into miles
    const u_Lori = Math.pow(r_Lori, 2);
    const o_Lori = Math.pow(w_Lori, 2);
    const dd_Lori = u_Lori + o_Lori;
    var d_Lori = Math.sqrt(dd_Lori);

    if(d_Lori <=50){
      document.getElementById('Lori').innerHTML = 'Lori State Park ' + Math.round(10*d_Lori)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + Lori_Lat + ',' + Lori_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

  //Loveland, Boyd Lake Park
  const x_LoveLand_BoydLake = Math.abs(latitude-LoveLand_BoydLake_Lat);
    const y_LoveLand_BoydLake = Math.abs(longitude-LoveLand_BoydLake_Long);
    const r_LoveLand_BoydLake = x_LoveLand_BoydLake*69; //Convert into miles
    const w_LoveLand_BoydLake = y_LoveLand_BoydLake*54.3; //Convert into miles
    const u_LoveLand_BoydLake = Math.pow(r_LoveLand_BoydLake, 2);
    const o_LoveLand_BoydLake = Math.pow(w_LoveLand_BoydLake, 2);
    const dd_LoveLand_BoydLake = u_LoveLand_BoydLake + o_LoveLand_BoydLake;
    var d_LoveLand_BoydLake = Math.sqrt(dd_LoveLand_BoydLake);

    if(d_LoveLand_BoydLake <=50){
      document.getElementById('LoveLand_BoydLake').innerHTML = 'Boyd Lake ' + Math.round(10*d_LoveLand_BoydLake)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + LoveLand_BoydLake_Lat + ',' + LoveLand_BoydLake_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

  //Del Camino, St. Vrain State Park
  const x_StVrain = Math.abs(latitude-StVrain_Lat);
    const y_StVrain = Math.abs(longitude-StVrain_Long);
    const r_StVrain = x_StVrain*69; //Convert into miles
    const w_StVrain = y_StVrain*54.3; //Convert into miles
    const u_StVrain = Math.pow(r_StVrain, 2);
    const o_StVrain = Math.pow(w_StVrain, 2);
    const dd_StVrain = u_StVrain + o_StVrain;
    var d_StVrain = Math.sqrt(dd_StVrain);

    if(d_StVrain <=50){
      document.getElementById('StVrain').innerHTML = 'St. Vrain ' + Math.round(10*d_StVrain)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + StVrain_Lat + ',' + StVrain_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

  //Brighton, Barr Lake State Park
  const x_BarrLake = Math.abs(latitude-BarrLake_Lat);
    const y_BarrLake = Math.abs(longitude-BarrLake_Long);
    const r_BarrLake = x_BarrLake*69; //Convert into miles
    const w_BarrLake = y_BarrLake*54.3; //Convert into miles
    const u_BarrLake = Math.pow(r_BarrLake, 2);
    const o_BarrLake = Math.pow(w_BarrLake, 2);
    const dd_BarrLake = u_BarrLake + o_BarrLake;
    var d_BarrLake = Math.sqrt(dd_BarrLake);

    if(d_BarrLake <=50){
      document.getElementById('BarrLake').innerHTML = 'Barr Lake ' + Math.round(10*d_BarrLake)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + BarrLake_Lat + ',' + BarrLake_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }

  //Eldorado Springs, Eldorado State Park
  const x_EldCan = Math.abs(latitude-EldCan_Lat);
    const y_EldCan = Math.abs(longitude-EldCan_Long);
    const r_EldCan = x_EldCan*69; //Convert into miles
    const w_EldCan = y_EldCan*54.3; //Convert into miles
    const u_EldCan = Math.pow(r_EldCan, 2);
    const o_EldCan = Math.pow(w_EldCan, 2);
    const dd_EldCan = u_EldCan + o_EldCan;
    var d_EldCan = Math.sqrt(dd_EldCan);

    if(d_EldCan <=50){
      document.getElementById('EldCan').innerHTML = 'Eldorado ' + Math.round(10*d_EldCan)/10 + ' miles away | ' + '<a href = "https://www.google.com/maps?q=' + EldCan_Lat + ',' + EldCan_Long + '"target = "_blank">Directions</a>';
    }
    else{
    }



//Lat and Long
document.getElementById('lat').innerHTML = 'Latitude: ' + latitude;
document.getElementById('long').innerHTML = 'Longitude: ' + longitude;

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
    //East Washington Farms Distance 
    const x_EastWashington = Math.abs(latitude-Farm_EastWashington_Lat);
    const y_EastWashington = Math.abs(longitude-Farm_EastWashington_Long);
    const r_EastWashington = x_EastWashington*69; //Convert into miles
    const w_EastWashington = y_EastWashington*54.3; //Convert into miles
    const u_EastWashington = Math.pow(r_EastWashington, 2);
    const o_EastWashington = Math.pow(w_EastWashington, 2);
    const dd_EastWashington = u_EastWashington + o_EastWashington;
    var d_Farm_EastWashington = Math.sqrt(dd_EastWashington);

    //Michoacan Mexico Farm Distance
    const x_Michoacan_Mexico = Math.abs(latitude-Farm_Michoacan_Mexico_Lat);
    const y_Michoacan_Mexico = Math.abs(longitude-Farms_Michoacan_Mexico_Long);
    const r_Michoacan_Mexico = x_Michoacan_Mexico*69; //Convert into miles
    const w_Michoacan_Mexico = y_Michoacan_Mexico*54.3; //Convert into miles
    const u_Michoacan_Mexico = Math.pow(r_Michoacan_Mexico, 2);
    const o_Michoacan_Mexico = Math.pow(w_Michoacan_Mexico, 2);
    const dd_Michoacan_Mexico = u_Michoacan_Mexico + o_Michoacan_Mexico;
    var d_Farm_Michoacan_Mexico = Math.sqrt(dd_Michoacan_Mexico);

    //Yuma Arizona Farm Distance
    const x_Yuma = Math.abs(latitude-Farm_Yuma_Lat);
    const y_Yuma = Math.abs(longitude-Farm_Yuma_Long);
    const r_Yuma = x_Yuma*69; //Convert into miles
    const w_Yuma = y_Yuma*54.3; //Convert into miles
    const u_Yuma = Math.pow(r_Yuma, 2);
    const o_Yuma = Math.pow(w_Yuma, 2);
    const dd_Yuma = u_Yuma + o_Yuma;
    var d_Farm_Yuma = Math.sqrt(dd_Yuma);

    //Imperial Valley California Farm Distance
    const x_ImperialValley = Math.abs(latitude-Farm_ImperialValley_Lat);
    const y_ImperialValley = Math.abs(longitude-Farm_ImperialValley_Long);
    const r_ImperialValley = x_ImperialValley*69; //Convert into miles
    const w_ImperialValley = y_ImperialValley*54.3; //Convert into miles
    const u_ImperialValley = Math.pow(r_ImperialValley, 2);
    const o_ImperialValley = Math.pow(w_ImperialValley, 2);
    const dd_ImperialValley = u_ImperialValley + o_ImperialValley;
    var d_Farm_ImperialValley = Math.sqrt(dd_ImperialValley);

    //Dade Country Florida Farm Distance
    const x_SouthernFlorida = Math.abs(latitude-Farm_SouthernFlorida_Lat);
    const y_SouthernFlorida = Math.abs(longitude-Farm_SouthernFlorida_Long);
    const r_SouthernFlorida = x_SouthernFlorida*69; //Convert into miles
    const w_SouthernFlorida = y_SouthernFlorida*54.3; //Convert into miles
    const u_SouthernFlorida = Math.pow(r_SouthernFlorida, 2);
    const o_SouthernFlorida = Math.pow(w_SouthernFlorida, 2);
    const dd_SouthernFlorida = u_SouthernFlorida + o_SouthernFlorida;
    var d_Farm_SouthernFlorida = Math.sqrt(dd_SouthernFlorida);


    


  //Apple
  var final_apple = d_Farm_EastWashington/1300;
  if(final_apple <= 1){
    document.getElementById('apple').innerHTML = 'Apples | Distance From Source: ' + Math.round(10*d_Farm_EastWashington)/10 + ' miles';
  }
  else {}

  //Avacado
  var final_avacado = d_Farm_Michoacan_Mexico/1300;
  if(final_avacado <= 1){
    document.getElementById('avacado').innerHTML = 'Avacado | Distance From Source: ' + Math.round(10*d_Farm_Michoacan_Mexico)/10 + ' miles';
  }
  else{}

  //Lettuce
  var final_lettuce = d_Farm_Yuma/1300;
  if(final_lettuce <= 1){
    document.getElementById('lettuce').innerHTML = 'Lettuce | Distance From Source: ' + Math.round(10*d_Farm_Yuma)/10 + ' miles';
  }
  else{}

  //Broccoli
  var final_broccoli = d_Farm_ImperialValley/1300;
  if(final_broccoli <= 1){
    document.getElementById('broccoli').innerHTML = 'Broccoli | Distance From Source: ' + Math.round(10*d_Farm_ImperialValley)/10 + ' miles';
  }
  else{}

  //Tomato
  var final_tomato = d_Farm_SouthernFlorida/1300;
  if(final_tomato <=1){
    document.getElementById('tomato').innerHTML = 'Tomato | Distance From Source: ' + Math.round(10*d_Farm_ImperialValley)/10 + ' miles';
  }
  else{
    document.getElementById('tomato_alt').innerHTML = 'Tomato | <b>Canned Tomatos</b> - Instead of - "Fresh" Produce';
  }
}


//for testing delete later
//Repacements





//Logo Change Code



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