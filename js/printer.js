// js for image changing in product description page
var printer= ["/images/printer1a.jpg", "/images/printer1a1.jpg", "/images/printer1a2.jpg", "/images/printer1a3.jpg"];

function change(getid){
    
    var primary = document.getElementById('primary-img');
    var sec1 = document.getElementById('101');
    var sec2 = document.getElementById('102');
    var sec3 = document.getElementById('103');
    var space;
    if(getid == 101){
        space = printer[0];
        printer[0]= printer[1];
        printer[1] = space;
    }
    else if(getid == 102){
        space = printer[0];
        printer[0]= printer[2];
        printer[2] = space;
    }
    else{
        space = printer[0];
        printer[0]= printer[3];
        printer[3] = space;
    }
    
    primary.innerHTML = "<img src =" + printer[0] + ">"; 
    sec1.innerHTML = "<img src =" + printer[1] + ">"; 
    sec2.innerHTML = "<img src =" + printer[2] + ">"; 
    sec3.innerHTML = "<img src =" + printer[3] + ">";
}