$(document).ready(function () {
    $('#titlelist').hide();
    $('#hometitle').hide();
    $('#weathertitle').hide();
    $('#forecasttitle').hide();
    $('#developertitle').hide();
    $('#baricon').click(function () {
        $('#titlelist').show();
        $('#hometitle').slideToggle(500);
        $('#weathertitle').slideToggle(500);
        $('#forecasttitle').slideToggle(500);
        $('#developertitle').slideToggle(500);
    });
});

document.getElementById("homebtn").onclick = function () {
    location.href = "/";
}
document.getElementById("hometitle").onclick = function () {
    location.href = "/";
}

document.getElementById("weatherbtn").onclick = function () {
    location.href = "pune";
}
document.getElementById("weathertitle").onclick = function () {
    location.href = "pune";
}

document.getElementById("developerbtn").onclick = function () {
    location.href = "contact";
}
document.getElementById("developertitle").onclick = function () {
    location.href = "contact";
}

var time = new Date();
var date = 31;
var month = time.getMonth();

var arrDate = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]

var arrMonth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

var date1 = addDays(new Date(), 1);
var date2 = addDays(new Date(), 2);
var date3 = addDays(new Date(), 3);
var date4 = addDays(new Date(), 4);
var date5 = addDays(new Date(), 5);

document.getElementById("dateMonth1").innerHTML = arrMonth[date1.getMonth()] + " " + arrDate[date1.getDate()];
document.getElementById("dateMonth2").innerHTML = arrMonth[date2.getMonth()] + " " + arrDate[date2.getDate()];
document.getElementById("dateMonth3").innerHTML = arrMonth[date3.getMonth()] + " " + arrDate[date3.getDate()];
document.getElementById("dateMonth4").innerHTML = arrMonth[date4.getMonth()] + " " + arrDate[date4.getDate()];
document.getElementById("dateMonth5").innerHTML = arrMonth[date5.getMonth()] + " " + arrDate[date5.getDate()];

//Updating values through API.......................

var input = document.getElementById("searchBox");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchBn").click();
    }
});

var loc = document.getElementById("searchBox").value;

var descri1 = document.getElementById("desci1");
var descri2 = document.getElementById("desci2");
var descri3 = document.getElementById("desci3");
var descri4 = document.getElementById("desci4");
var descri5 = document.getElementById("desci5");

var maintemp1 = document.getElementById("temp1");
var maintemp2 = document.getElementById("temp2");
var maintemp3 = document.getElementById("temp3");
var maintemp4 = document.getElementById("temp4");
var maintemp5 = document.getElementById("temp5");

var range1 = document.getElementById("range1");
var range2 = document.getElementById("range2");
var range3 = document.getElementById("range3");
var range4 = document.getElementById("range4");
var range5 = document.getElementById("range5");

var fetchWeather = "/forecast";
const locationapi = fetchWeather + "?address=" + loc;

fetch(locationapi).then(response => {
    response.json().then(data => {
        
        descri1.innerHTML = data.description1.toUpperCase();
        descri2.innerHTML = data.description2.toUpperCase();
        descri3.innerHTML = data.description3.toUpperCase();
        descri4.innerHTML = data.description4.toUpperCase();
        descri5.innerHTML = data.description5.toUpperCase();

        maintemp1.innerHTML = (data.temperature1 - 273.15).toFixed(2) + "°C";
        maintemp2.innerHTML = (data.temperature2 - 273.15).toFixed(2) + "°C";
        maintemp3.innerHTML = (data.temperature3 - 273.15).toFixed(2) + "°C";
        maintemp4.innerHTML = (data.temperature4 - 273.15).toFixed(2) + "°C";
        maintemp5.innerHTML = (data.temperature5 - 273.15).toFixed(2) + "°C";

        range1.innerHTML = "Min : " + (data.mintemp1 - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp1 - 273.15).toFixed(2) + "°C";
        range2.innerHTML = "Min : " + (data.mintemp2 - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp2 - 273.15).toFixed(2) + "°C";
        range3.innerHTML = "Min : " + (data.mintemp3 - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp3 - 273.15).toFixed(2) + "°C";
        range4.innerHTML = "Min : " + (data.mintemp4 - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp4 - 273.15).toFixed(2) + "°C";
        range5.innerHTML = "Min : " + (data.mintemp5 - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp5 - 273.15).toFixed(2) + "°C";
    })
})

document.getElementById("searchBn").onclick = function () {

    var title = document.getElementById("change");
    
    var loca = document.getElementById("searchBox").value;
    console.log(loca);
    var maintemp1 = document.getElementById("temp1");
    var maintemp2 = document.getElementById("temp2");
    var maintemp3 = document.getElementById("temp3");
    var maintemp4 = document.getElementById("temp4");
    var maintemp5 = document.getElementById("temp5");

    var descri1 = document.getElementById("desci1");
    var descri2 = document.getElementById("desci2");
    var descri3 = document.getElementById("desci3");
    var descri4 = document.getElementById("desci4");
    var descri5 = document.getElementById("desci5");

    var range1 = document.getElementById("range1");
    var range2 = document.getElementById("range2");
    var range3 = document.getElementById("range3");
    var range4 = document.getElementById("range4");
    var range5 = document.getElementById("range5");

    var city1 = document.getElementById("city1");
    var city2 = document.getElementById("city2");
    var city3 = document.getElementById("city3");
    var city4 = document.getElementById("city4");
    var city5 = document.getElementById("city5");

    if (loca === "") {
        swal({
            title: "Something went wrong!!",
            text: "City was not entered.",
            icon: "warning",
        });
    }
    else {

        var fetchWeather = "/forecast";
        const locationapi = fetchWeather + "?address=" + loca;

        fetch(locationapi).then(response => {
            response.json().then(data => {
                if (data.temperature1 == " ") {

                    title.innerHTML = "Wrong Location";

                    city1.innerHTML = "Wrong Location!! Please Try for another location.";
                    city2.innerHTML = "Wrong Location!! Please Try for another location.";
                    city3.innerHTML = "Wrong Location!! Please Try for another location.";
                    city4.innerHTML = "Wrong Location!! Please Try for another location.";
                    city5.innerHTML = "Wrong Location!! Please Try for another location.";
                    
                    dateMonth1.innerHTML = " ";
                    dateMonth2.innerHTML = " ";
                    dateMonth3.innerHTML = " ";
                    dateMonth4.innerHTML = " ";
                    dateMonth5.innerHTML = " ";

                    descri1.innerHTML = " ";
                    descri2.innerHTML = " ";
                    descri3.innerHTML = " ";
                    descri4.innerHTML = " ";
                    descri5.innerHTML = " ";

                    maintemp1.innerHTML = " ";
                    maintemp2.innerHTML = " ";
                    maintemp3.innerHTML = " ";
                    maintemp4.innerHTML = " ";
                    maintemp5.innerHTML = " ";

                    range1.innerHTML = " ";
                    range2.innerHTML = " ";
                    range3.innerHTML = " ";
                    range4.innerHTML = " ";
                    range5.innerHTML = " ";

                    
                
                } else {

                    title.innerHTML = loca.toUpperCase() + " | " + data.country1;

                    city1.innerHTML = "&nbsp" + loca.toUpperCase() + " | " + data.country1;
                    city2.innerHTML = "&nbsp" + loca.toUpperCase() + " | " + data.country2;
                    city3.innerHTML = "&nbsp" + loca.toUpperCase() + " | " + data.country3;
                    city4.innerHTML = "&nbsp" + loca.toUpperCase() + " | " + data.country4;
                    city5.innerHTML = "&nbsp" + loca.toUpperCase() + " | " + data.country5;

                    descri1.innerHTML = (data.description1).toUpperCase();
                    descri2.innerHTML = (data.description2).toUpperCase();
                    descri3.innerHTML = (data.description3).toUpperCase();
                    descri4.innerHTML = (data.description4).toUpperCase();
                    descri5.innerHTML = (data.description5).toUpperCase();

                    dateMonth1.innerHTML = arrMonth[date1.getMonth()] + " " + arrDate[date1.getDate()];
                    dateMonth2.innerHTML = arrMonth[date2.getMonth()] + " " + arrDate[date2.getDate()];
                    dateMonth3.innerHTML = arrMonth[date3.getMonth()] + " " + arrDate[date3.getDate()];
                    dateMonth4.innerHTML = arrMonth[date4.getMonth()] + " " + arrDate[date4.getDate()];
                    dateMonth5.innerHTML = arrMonth[date5.getMonth()] + " " + arrDate[date5.getDate()];

                    maintemp1.innerHTML = (data.temperature1 - 273.15).toFixed(2) + "°C";
                    maintemp2.innerHTML = (data.temperature2 - 273.15).toFixed(2) + "°C";
                    maintemp3.innerHTML = (data.temperature3 - 273.15).toFixed(2) + "°C";
                    maintemp4.innerHTML = (data.temperature4 - 273.15).toFixed(2) + "°C";
                    maintemp5.innerHTML = (data.temperature5 - 273.15).toFixed(2) + "°C";

                    range1.innerHTML = "Min : " + (data.mintemp1 - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp1 - 273.15).toFixed(2) + "°C";
                    range2.innerHTML = "Min : " + (data.mintemp2 - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp2 - 273.15).toFixed(2) + "°C";
                    range3.innerHTML = "Min : " + (data.mintemp3 - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp3 - 273.15).toFixed(2) + "°C";
                    range4.innerHTML = "Min : " + (data.mintemp4 - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp4 - 273.15).toFixed(2) + "°C";
                    range5.innerHTML = "Min : " + (data.mintemp5 - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp5 - 273.15).toFixed(2) + "°C";   
                    
                }
            })
        })
    }
}

var loader = document.getElementById("loading");

function loadFunc() {
    loader.style.display = "none";
    document.getElementById("yt1").style.display = "none";
    document.getElementById("yt2").style.display = "none";
    document.getElementById("yt3").style.display = "none";
}