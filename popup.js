checkURL(document.location.href);

function checkURL(check_url) {
  var xhr = new XMLHttpRequest();
  var url = "https://checkurl.phishtank.com/checkurl/";
  var params = "url="+check_url+"&format=json&app_key=625d6febdf6ecc6e6a9b7e801d9edfc268ff9d5f268c7bae6b93ac4afe815aa0";
  xhr.open("POST", url, true);

  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {//Call a function when the state changes.
      if(xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          if ( response.results.valid == true) {
            alert("This is a suspected phishing page!!");
            console.log("This is a suspected phishing page!!");
          }
          else {
            console.log(response.results.valid);
            console.log(response);
          }
      }
  }
  xhr.send(params);
}
