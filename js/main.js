function formValidation()
{
    /*var college=document.registration.college;
    var rollno=document.registration.roll;
    var tel=document.registration.tel;
    if (college.value=="IEC" && (rollno.value.slice(2,5)=="090" || rollno.value.slice(0,6)=="190090"))
    {   
        window.open("https://bit.ly/2V0EQpx");
    }
    else if (college.value=="NIEC")
    {
        window.open("https://bit.ly/2V6oT1c");
    }
    else
    {
        alert("Please Enter Valid Details");

    }*/
    alert("Online Registration has been Closed. Hope you successfully Registered online.\n  Our Offline Registration are open till 10:00 AM at F-block(I.E.C CET) ");
}


var deadline = new Date("feb 26, 2020 00:00:00").getTime(); 
var x = setInterval(function() { 
    var now = new Date().getTime(); 
    var t = deadline - now;
    if(t>0){ 
        var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
        var seconds = Math.floor((t % (1000 * 60)) / 1000); 
        document.getElementById("days").innerHTML =days; 
        document.getElementById("hours").innerHTML =hours; 
        document.getElementById("minutes").innerHTML = minutes;  
        document.getElementById("seconds").innerHTML =seconds;
    }
else{
    document.getElementById("reg").innerHTML ="Registration has been closed. Hope you have Registered!!!";
    document.getElementById("days").innerHTML ="0"; 
    document.getElementById("hours").innerHTML ="0"; 
    document.getElementById("minutes").innerHTML ="0";
    document.getElementById("seconds").innerHTML ="0";
}
}, 1000);
    