var N=document.getElementsByTagName("input")[0];
var Adr=document.getElementsByTagName("input")[1];
var email=document.getElementsByTagName("input")[2];
var Ph=document.getElementsByTagName("input")[3];

var span1=document.getElementById("1");
var span2=document.getElementById("2");
var span3=document.getElementById("3");
var span4=document.getElementById("4");
var span5=document.getElementById("5");
function validateName(){
    var regexofName=/^[a-zA-Z]+$/;
    if(N.value==""){
        span1.textContent="this field is required";
    }else if(regexofName.test(N.value)===false){
        span1.textContent="plese enter character";
    }else{
        span1.textContent="";
    }
}

function validateAdress(){
    if(Adr.value==""){
        span2.textContent="this field is required";
    }else if(!(Adr.value).includes(",")){
        span2.textContent="plese enter right Adress";
    }else{
        span2.textContent="";
    }
}

function validateEmail(){
    var regexofEm=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value==""){
        span3.textContent="this field is required";
    }else if(regexofEm.test(email.value)===false){
        span3.textContent="plese enter valid email";
    }else{
        span3.textContent="";
    }
}

function validatePhone(){
    if(Ph.value==""){
        span4.textContent="this field is required";
    }else if((Ph.value).length!=11 ){
        span4.textContent="plese enter 11 number";
    }else{
        span4.textContent="";
    }
}

function validate(e){
    if(N.value=="" || Ph.value==""  || email.value=="" ||Adress.value==""){
        e.preventDefault();
        span5.textContent="plese fill all fields";
    }}




