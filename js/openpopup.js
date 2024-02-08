
// js for signup page
function openpopup(event){
    event.preventDefault();
    let pop= document.getElementById("popup");
    pop.classList.add("open-popup");
}

function thankyou(){
    var nameValue= document.forms["Registration"]["name"].value;
    var exit = document.getElementById('submitted');
    exit.innerHTML="Registered! Thank you, " + nameValue;
    
}

function registered(){
    var name = document.forms["Registration"]["name"].value;
    var  email = document.forms["Registration"]["email"].value;
    var phone = document.forms["Registration"]["phone"].value;
    var password = document.forms["Registration"]["password"].value;
    thankyou();
}