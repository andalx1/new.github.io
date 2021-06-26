const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6926a4137c584c1b23b6a6b708e3056e";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    



   // document.getElementById('current-temp').textContent = jsObject.main.temp;
});

