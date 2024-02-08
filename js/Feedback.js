// js for feedback for about us page
function feedback(){
    var home = document.forms["feedbackForm"]["home"].value;
    var product = document.forms["feedbackForm"]["product"].value;
    var blog = document.forms["feedbackForm"]["blog"].value;
    var research = document.forms["feedbackForm"]["research"].value;
    var aboutUs = document.forms["feedbackForm"]["aboutUs"].value;
    var suggestion = document.forms["feedbackForm"]["suggestion"].value;
    
    if(suggestion == ""){
        alert("Please write your comment first.");
    }
    else{
        alert("We've received your message.");
 }

}