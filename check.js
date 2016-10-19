 console.log("listener");
  alert("hello");
        if (checkURL(document.location.href) == false) {
             alert("This is a suspected phishing page!");
        }
        else {
          console.log("Safe")
        }
  });


function checkURL(url) {
  var http = new XMLHttpRequest();
  var url = "http://checkurl.phishtank.com/checkurl/";
  var params = "url="+url+"&format=json";
  http.open("POST", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  console.log('checkurl');
  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          var response = JSON.parse(xhr.responseText);
          if ( response.verified = 'y') {
            return true;
          }
      }
  }
  http.send(params);
}
