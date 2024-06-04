var arr=location.search.split("&");

for (var i=1;i<arr.length;i++){
    arr[i]=arr[i].split("=")[1];
}

var Name=document.createElement("h2");
var Email=document.createElement("h2");
var Phone=document.createElement("h2");
var Adress=document.createElement("h2");
var Gender=document.createElement("h2");

Name.textContent="Hello "+arr[0].split("=")[1];
Email.textContent="Your Email is: "+arr[3].replace("%40", "@");
Phone.textContent="Your mobile number is: "+arr[4];
Adress.textContent="Your Adress is: "+arr[1].replace("%2",",");
Gender.textContent="Your Gender is: "+arr[2];

document.body.appendChild(Name);
document.body.appendChild(Email);
document.body.appendChild(Phone);
document.body.appendChild(Adress);
document.body.appendChild(Gender);
