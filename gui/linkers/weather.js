function get_weather() {
  var {PythonShell}  = require("python-shell")
  var path = require("path")

  var city = document.getElementById("city").value
  document.getElementById("city").value = "";

  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : [city]
  }

  var weather = new PythonShell('weather_engine.py', options);
  weather.on('message', function(message) {
    swal(message);
  })
}
