var hour; 
var newer;
var NewValue;

hour = window.prompt("Please enter your hourly wage.");

newer=(0.25);
NewValue=(hour/newer);
document.write(" With your wage, you could afford " + NewValue + " freddos in 2017.");

function FreddoPicture(){
    if(NewValue>72){
        document.write("Your hourly wage is " + hour + " GBP.");
        document.write("You can afford 72 freddos.")
        document.getElementById("displayImage").innerHTML = "<img src='images/HappyFreddo.jpg'>";
    }
    else if(NewValue<72){
        document.write("Your hourly wage is " + hour + " GBP.");
        document.write("You can't afford 72 freddos.")
        document.getElementById("displayImage").innerHTML = "<img src='images/GrumpyFreddo.jpg'>";
    }
    else if(NewValue == 72){
        document.write("Your hourly wage is " + hour + " GBP.");
        document.write("You can afford exactly 72 freddos.")
        document.getElementById("displayImage").innerHTML = "<img src='images/GrumpyFreddo.jpg'>";
    }
    else{

        document.getElementById("displayImage").innerHTML = "<b>Something went wrong</b>";
    }

}

FreddoPicture();