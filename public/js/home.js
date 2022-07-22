$(document).ready(function(){
    $('#titlelist').hide();
    $('#hometitle').hide();
    $('#weathertitle').hide();
    $('#forecasttitle').hide();
    $('#developertitle').hide();
    $('#baricon').click(function(){
        $('#movingLine').css("z-index", "-1");
        $('#titlelist').show();
        $('#hometitle').slideToggle(500);
        $('#weathertitle').slideToggle(500);
        $('#forecasttitle').slideToggle(500);
        $('#developertitle').slideToggle(500); 
    });
});

document.getElementById("searchButton").onclick = function () {
    if (document.getElementById("searchBox").value == "none") {
        swal({
            title: "Nothing selected !!",
            text: "Please, select the choice first.",
        });  
    }
    else if (document.getElementById("searchBox").value == "byName") {
        location.href = "pune";
    }
    else if (document.getElementById("searchBox").value == "byLocation") {
        location.href = "";
    }
}

document.getElementById("weatherbtn").onclick = function () {
    location.href = "pune";
}
document.getElementById("weathertitle").onclick = function () {
    location.href = "pune";
}

document.getElementById("forecastbtn").onclick = function () {
    location.href = "forecasting";
}
document.getElementById("forecasttitle").onclick = function () {
    location.href = "forecasting";
}

document.getElementById("pune").onclick = function () {
    location.href = "pune";
}

document.getElementById("mumbai").onclick = function () {
    location.href = "mumbai";
}

document.getElementById("developerbtn").onclick = function () {
    location.href = "contact";
}
document.getElementById("developertitle").onclick = function () {
    location.href = "contact";
}

var pune = document.getElementById("pune");
var mumbai = document.getElementById("mumbai");
var fetchWeather = "/weather";

const punetemp = fetchWeather + "?address=Pune";
fetch(punetemp).then(response => {
    response.json().then(data => {
        pune.innerHTML = "Pune, India : " + (data.temperature - 273.15).toFixed(2) + "°C";
    })
})

const mumbaitemp = fetchWeather + "?address=Mumbai";
fetch(mumbaitemp).then(response => {
    response.json().then(data => {
        mumbai.innerHTML = "Mumbai, India  : " + (data.temperature - 273.15).toFixed(2) + "°C";
    })
})

// for preloader..................

var loader = document.getElementById("loading");

function loadFunc() {
    loader.style.display = "none";
    document.getElementById("yt1").style.display = "none";
    document.getElementById("yt2").style.display = "none";
    document.getElementById("yt3").style.display = "none";
}