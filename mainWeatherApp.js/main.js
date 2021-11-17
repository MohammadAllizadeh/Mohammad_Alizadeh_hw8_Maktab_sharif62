console.log("Ok");
$(document).ready(function() { 
$('#submitWeather').click(function () {
   
var city=$("#city").val();
    if (city!="") {
        $.ajax({
            type: "GET",
            url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+"&units=metric"+"&APPID=c10bb3bd22f90d636baa008b1529ee25",
            // data: "data",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var widget = show(data);
                $("#show").html(widget);
                $('#city').val('');
            }
        });
    }else{
        $("#error").html('Firld cannot be empty');
    }
})
});
function show(data) {
    return "<h1><strong>country: </strong>: "+data.sys.country+"</h1>"+
    "<h2><strong>Name:</strong>: "+data.name+"</h2>"+
    "<h2><strong>Weather:</strong>: "+data.weather[0].main+"</h2>"+
    "<h2><strong>description:</strong>: "+data.weather[0].description+"</h2>"+
    "<h2><strong>Temp:</strong>: "+data.main.temp+"</h2>"+
    "<h2><strong>Pressure:</strong>: "+data.main.pressure+"</h2>"+
    "<h2><strong>Humidity:</strong>: "+data.main.humidity+"</h2>"+
    "<h2><strong>Temp_min:</strong>: "+data.main.temp_min+"</h2>"+
    "<h2><strong>Temp_max:</strong>: "+data.main.temp_max+"</h2>"+
    "<h2><strong>Wind_speed</strong>: "+data.wind.speed+"</h2>"+
    "<h2><strong>Wind_deg</strong>: "+data.wind.deg+"</h2>"
    // "<h2><strong>description:</strong>: "+data.description.icon+"</h2>"
}