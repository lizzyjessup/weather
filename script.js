document.addEventListener('DOMContentLoaded', () => {

  // create a new XMLHTTPRequest object
  var request = new XMLHttpRequest();

  // Call Dark Sky API for Seattle lat/lang
  request.open('GET', 'https://api.darksky.net/forecast/d26c9385afe70878a5707465419d717b/19.54289,155.6659', true);

  request.onload = () => {

    // gather data from API call
    var data = JSON.parse(request.responseText);
    var contents = data ['currently']['temperature'];

    // edit id temp span to include data responseText
    document.querySelector('#temp').innerHTML = contents;

  };

  // send request
  request.send();
});
