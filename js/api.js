 var usernumber, contactnumber;
        
       
        
        fetch('https://ohioh.app:8442/api/users')
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
            var count = Object.keys(data).length;
  console.log(count);
  console.log(data);
            document.getElementById("contact").innerHTML =count;
           
  });

          fetch('https://ohioh.app:8443/')
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
            var count = Object.keys(data).length;
  console.log("number of users"+count);
  console.log(data);
            document.getElementById("download").innerHTML =count;
               document.getElementById("donate").innerHTML =count;
           
  });
        function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
        function checkCookie() {
           
  var user=getCookie("email");
            console.log('cookie:  '+user)
  if (user != "") {
    alert("You are succesfully logged in " );
  } else {
     
  }
}
