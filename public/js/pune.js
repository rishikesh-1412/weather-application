$(document).ready(function () {
    $('#titlelist').hide();
    $('#hometitle').hide();
    $('#weathertitle').hide();
    $('#forecasttitle').hide();
    $('#developertitle').hide();
    $('#baricon').click(function () {
        $('#movingLine').css("z-index", "-1");
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

document.getElementById("forecastbtn").onclick = function () {
    location.href = "forecasting";
}
document.getElementById("forecasttitle").onclick = function () {
    location.href = "forecasting";
}

document.getElementById("developerbtn").onclick = function () {
    location.href = "contact";
}
document.getElementById("developertitle").onclick = function () {
    location.href = "contact";
}

var d = new Date();
var day = d.getDay();
var month = d.getMonth();
var dat = d.getDate();
var hr = d.getHours();
var min = d.getMinutes();

var monarr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var dayarr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var datearr = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
var hrarr = ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
var minarr = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];

document.getElementById("day").innerHTML = dayarr[day];
document.getElementById("month").innerHTML = monarr[month];
document.getElementById("date").innerHTML = datearr[dat];
document.getElementById("hour").innerHTML = hrarr[hr];
document.getElementById("min").innerHTML = minarr[min];
if (hr == 12) {
    document.getElementById("am").innerHTML = "PM";
}
else if (hr < 12) {
    document.getElementById("am").innerHTML = "AM";
}
else {
    document.getElementById("am").innerHTML = "PM";
}

//NodeJs work start here............................................

var input = document.getElementById("searchBox");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchBn").click();
    }
});

var loc = document.getElementById("searchBox").value;
var icon = document.getElementById("icon");
var descri = document.getElementById("descri");
var maintemp = document.getElementById("temp");
var range = document.getElementById("range");
var fetchWeather = "/weather";
const locationapi = fetchWeather + "?address=" + loc;

fetch(locationapi).then(response=>{
    response.json().then(data=>{

        if (data.description.search("haze") != -1) {
            icon.className = "fas fa-smog";
        }
        else if (data.description.search("cloud") != -1) {
            icon.className = "fas fa-cloud";
        }
        else if (data.description.search("rain") != -1) {
            icon.className = "fas fa-cloud-rain";
        }
        else {
            icon.className = "fas fa-cloud-sun";
        }

        descri.innerHTML = data.description.toUpperCase();
        
        maintemp.innerHTML = (data.temperature - 273.15).toFixed(2) +"°C";
        range.innerHTML = "Min : " + (data.mintemp - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp - 273.15).toFixed(2)+"°C";
    })
})



document.getElementById("searchBn").onclick = function () {
    var title = document.getElementById("change");
    var icon = document.getElementById("icon");
    var loca = document.getElementById("searchBox").value;
    var maintemp = document.getElementById("temp");
    var range = document.getElementById("range");
    var pune = document.getElementById("pune");
    var fetchWeather = "/weather";

    if (loca === "") {
        swal({
            title: "Something went wrong!!",
            text: "City was not entered.",
            icon: "warning",
        });
    }
    else{  

        const locationapi = fetchWeather + "?address=" + loca;

        fetch(locationapi).then(response => {
            response.json().then(data => {
                if (data.temperature == " "){
                    title.innerHTML = "Wrong Location";

                    icon.className = "fas fa-times";
                    
                    descri.innerHTML = " ";

                    maintemp.innerHTML = " ";
                    range.innerHTML = " ";
                    
                    pune.innerHTML = "Given location [ " + loca + " ] is invalid. Please try another location.";
                }else{

                    title.innerHTML = loca.toUpperCase() + " | " + data.country;

                    if (data.description.search("haze") != -1) {
                        icon.className = "fas fa-smog";
                    }
                    else if (data.description.search("cloud") != -1) {
                        icon.className = "fas fa-cloud";
                    }
                    else if (data.description.search("rain") != -1) {
                        icon.className = "fas fa-cloud-rain";
                    }
                    else {
                        icon.className = "fas fa-cloud-sun";
                    }

                    descri.innerHTML = (data.description).toUpperCase();

                    maintemp.innerHTML = (data.temperature - 273.15).toFixed(2) + "°C";
                    range.innerHTML = "Min : " + (data.mintemp - 273.15).toFixed(2) + "°C  |  Max : " + (data.maxtemp - 273.15).toFixed(2) + "°C";
                    pune.innerHTML = "&nbsp" + loca.toUpperCase() + " | " + data.country;
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