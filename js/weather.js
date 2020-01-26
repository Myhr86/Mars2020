fetch("https://api.nasa.gov/insight_weather/?api_key=SOuJvU1fvVtBktEAsIzZGz54PnhBB8Q0Yavfu3MO&feedtype=json&ver=1.0")
  .then(result => result.json())
  .then((res) => {
    createWeather(res);
    })
  .catch(err => console.log(err))

function createWeather(result) {
  console.log(result);
  var date = JSON.stringify(result[411].Last_UTC);
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
  var roundedWindHigh = result[411].HWS.mn;
  var roundedWindAvg = result[411].HWS.av;
  var roundedWindLow = result[411].HWS.mx;

  buttonF.addEventListener("click", function() {
    high.innerHTML =  result[411].AT.mn + " F";
    avg.innerHTML =  result[411].AT.av + " F";
    low.innerHTML =  result[411].AT.mx + " F";
  });
  buttonC.addEventListener("click", function() {
    var mnToCel = (result[411].AT.mn - 32) * 5 / 9;
    var avgToCel = (result[411].AT.av - 32) * 5 / 9;
    var mxToCel = (result[411].AT.mx - 32) * 5 / 9;
    high.innerHTML =  mnToCel.toFixed(3) + " C";
    avg.innerHTML =  avgToCel.toFixed(3) + " C";
    low.innerHTML =  mxToCel.toFixed(3) + " C";
  });

  buttonMph.addEventListener("click", function() {
    highWind.innerHTML =  result[411].HWS.mn.toFixed(3) + " Mph";
    avgWind.innerHTML =  result[411].HWS.av.toFixed(3) + " Mph";
    lowWind.innerHTML =  result[411].HWS.mx.toFixed(3) + " Mph";
  });
  buttonKmh.addEventListener("click", function() {
    var mphToKmhHigh = (result[411].HWS.mn * 1.609344);
    var mphToKmhAvg = (result[411].HWS.av * 1.609344);
    var mphToKmhLow = (result[411].HWS.mx * 1.609344);
    highWind.innerHTML =  mphToKmhHigh.toFixed(3) + " Kmh";
    avgWind.innerHTML =  mphToKmhAvg.toFixed(3) + " Kmh";
    lowWind.innerHTML =  mphToKmhLow.toFixed(3) + " Kmh";
  });

  currentSol.innerHTML = result.sol_keys[6];
  currentDay.innerHTML = resShortened;
  currentWind.innerHTML = result[411].WD.most_common.compass_point;
  //currentSeason.innerHTML = result[411].Season;
  high.innerHTML =  result[411].AT.mn + " F";
  avg.innerHTML =  result[411].AT.av + " F";
  low.innerHTML =  result[411].AT.mx + " F";


  highWind.innerHTML =  roundedWindHigh.toFixed(3) + " Mph";
  avgWind.innerHTML =  roundedWindAvg.toFixed(3) + " Mph";
  lowWind.innerHTML =  roundedWindLow.toFixed(3) + " Mph";

}
