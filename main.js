function calculate(){
    var birth_day=document.getElementById("day_born").value;
    var birth_month=document.getElementById("month_born").value;
    var birth_year=document.getElementById("year_born").value;

    var current_day=document.getElementById("day_today").value;
    var current_month=document.getElementById("month_today").value;
    var current_year=document.getElementById("year_today").value;

    var date1= new Date(birth_month+'/'+birth_day+'/'+birth_year);
    var date2= new Date(current_month+'/'+current_day+'/'+current_year);
    
    if (isNaN(date1)){
        console.log("date1 is NaN");
        document.getElementById("date1_NaN").innerHTML="Not A Valid Birth Date";
    }
    else {
        if (isNaN(date2)){
            console.log("date2 is NaN");
            document.getElementById("date2_NaN").innerHTML="Not A Valid Current Date";
        } 
        else {
            var diff= (date2-date1)/1000;
            if (diff <= 0){
                document.getElementById("seconds_age").innerHTML="The Birth Date Has To Be Before The Current Date";
            } 
            else {
                console.log(date1);
                console.log(date2);
                document.getElementById("seconds_age").innerHTML=diff;
            }
        }
    }
}