var latitude = sessionStorage.latitude;
var longitude = sessionStorage.longitude;

//Establish Latitude For Farms
const Farm_NorthernCalifornia_Lat = 11;
const Farm_CentralCalifornia_Lat = 11;
const Farm_SouthernCalifornia_Lat = 11;
const Farm_Georgia_Lat = 11;
const Farm_Florida_Lat = 11;

//Establish Longitude For Farms
const Farm_NorthernCalifornia_Long = 11;
const Farm_CentralCalifornia_Long = 11;
const Farm_SouthernCalifornia_Long = 11;
const Farm_Georgia_Long = 11;
const Farm_Floria_Long = 11;

//Get Date of Month
const get = new Date();
const date = get.getMonth();

//January
if (date=1){
var d_Farm_NorthernCalifornia = sqrt((latitude-Farm_NorthernCalifornia_Lat)^2 + (longitude-Farm_NorthernCalifornia_Long)^2);
var d_Farm_CentralCalifornia = sqrt((latitude-Farm_CentralCalifornia_Lat)^2 + (longitude-Farm_CentralCalifornia_Long)^2);
var d_Farm_SouthernCalifornia = sqrt((latitude-Farm_SouthernCalifornia_Lat)^2 + (longitude-Farm_SouthernCalifornia_Long)^2);
var d_Farm_Georgia = sqrt((latitude-Farm_Georgia_Lat)^2+(longitude-Farm_Georgia_Long)^2);

    if (d_Farm_NorthernCalifornia > 100){

    }

    else{

    }

    if (d_Farm_CentralCalifornia > 100){

    }

    else{

    }

}

//February
else if (date=2){

}

//March
else if (date=3){

}

//April
else if (date=4){

}

//May
else if (date=5){

}

//June
else if (date=6){

}

//July
else if (date=7){

}

//August
else if (date=8){

}

//September
else if (date=9){

}

//October
else if (date=10){

}

//November
else if (date=11){

}

//December
else if (date=12){

}

else{
    location.replace("#")
}