// js for popup name in signup page
function submitted(){
    var nameValue= document.forms["Registration"]["nam"].value;
    document.getElementById("submitted").innerHTML="Thank you, " + nameValue;
}