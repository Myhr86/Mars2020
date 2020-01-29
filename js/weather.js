fetch("https://api.nasa.gov/insight_weather/?api_key=SOuJvU1fvVtBktEAsIzZGz54PnhBB8Q0Yavfu3MO&feedtype=json&ver=1.0")
  .then(result => result.json())
  .then((res) => {
    createWeather(res);
    })
  .catch(err => console.log(err))

function createWeather(result) {
  var sol_keys = result["sol_keys"];
  var currentResult = result[sol_keys[6]];

  var date = JSON.stringify(currentResult.Last_UTC);
  var currentSol = document.getElementById("currentSol");
  var currentDay = document.getElementById("currentDay");
  var currentWind = document.getElementById("currentWind");
  var currentSeason = document.getElementById("season");
  var newDate = date.slice(1,11);
  var resShortened = newDate.split(" ");

  var buttonF = document.getElementById("fahrenheit");
  var buttonC = document.getElementById("celcius");
  var buttonMph = document.getElementById("buttonMph");
  var buttonKmh = document.getElementById("buttonKmh");

  var high = document.getElementById("high");
  var avg = document.getElementById("avg");
  var low = document.getElementById("low");
  var roundedWindHigh = currentResult.HWS.mn;
  var roundedWindAvg = currentResult.HWS.av;
  var roundedWindLow = currentResult.HWS.mx;
  var roundedTempHigh = currentResult.AT.mn;
  var roundedTempAvg = currentResult.AT.av;
  var roundedTempLow = currentResult.AT.mx;

  buttonF.addEventListener("click", function() {
    high.innerHTML =  roundedTempHigh.toFixed(1) + " F";
    avg.innerHTML =  roundedTempAvg.toFixed(1) + " F";
    low.innerHTML =  roundedTempLow.toFixed(1) + " F";
  });
  buttonC.addEventListener("click", function() {
    var mnToCel = (currentResult.AT.mn - 32) * 5 / 9;
    var avgToCel = (currentResult.AT.av - 32) * 5 / 9;
    var mxToCel = (currentResult.AT.mx - 32) * 5 / 9;
    high.innerHTML =  mnToCel.toFixed(1) + " C";
    avg.innerHTML =  avgToCel.toFixed(1) + " C";
    low.innerHTML =  mxToCel.toFixed(1) + " C";
  });

  buttonMph.addEventListener("click", function() {
    highWind.innerHTML =  currentResult.HWS.mx.toFixed(1) + " Mph";
    avgWind.innerHTML =  currentResult.HWS.av.toFixed(1) + " Mph";
    lowWind.innerHTML =  currentResult.HWS.mn.toFixed(1) + " Mph";
  });
  buttonKmh.addEventListener("click", function() {
    var mphToMsHigh = (currentResult.HWS.mx * 1.609344);
    var mphToMsAvg = (currentResult.HWS.av * 1.609344);
    var mphToMsLow = (currentResult.HWS.mn * 1.609344);
    var highToMs = 0.277778 * mphToMsHigh;
    var avgToMs = 0.277778 * mphToMsAvg;
    var lowToMs = 0.277778 * mphToMsLow;

    highWind.innerHTML =  highToMs.toFixed(1) + " M/s";
    avgWind.innerHTML =  mphToMsAvg.toFixed(1) + " M/s";
    lowWind.innerHTML =  mphToMsLow.toFixed(1) + " M/s";
  });

  currentSol.innerHTML = sol_keys[6];
  currentDay.innerHTML = resShortened;
  currentWind.innerHTML = currentResult.WD.most_common.compass_point;
  
  high.innerHTML =  roundedTempHigh.toFixed(1) + " F";
  avg.innerHTML =  roundedTempAvg.toFixed(1) + " F";
  low.innerHTML =  roundedTempLow.toFixed(1) + " F";

  highWind.innerHTML =  roundedWindHigh.toFixed(1) + " Mph";
  avgWind.innerHTML =  roundedWindAvg.toFixed(1) + " Mph";
  lowWind.innerHTML =  roundedWindLow.toFixed(1) + " Mph";

}
