setInterval(digitalTime, 1000); //call setintral to run the clock
                                 // 1000 = 1s;



//function

function digitalTime(){ // setting the time to AM PM

    // calling the variables
    
    const timeStart  = new Date();
    let hoursEl = timeStart.getHours();
    let minutesEl = timeStart.getMinutes();
    let secondEl = timeStart.getSeconds();
    let peroid = 'AM'


    if(hoursEl > 12){
        hoursEl -= 12; 
        peroid = 'PM';
    }

    if(hoursEl === 0){
        hoursEl = 12;
        peroid = 'AM'
    }

    //using the terrnary operator
    /* 
    The first being condition followed by a question mark (?).
     The second is an expression to execute if the condition is true, followed by a colon (:). 
    Finally, the third operand is another expression to execute if the condition is false. 
    It is a simpler way to write an if-else statement.
    */

    hoursEl = hoursEl < 10 ? '0' + hoursEl : hoursEl;
    minutesEl = minutesEl < 10 ? '0' + minutesEl : minutesEl;
    secondEl = secondEl < 10 ? '0' + secondEl : secondEl;

    let currentTime = hoursEl + ':' + minutesEl + ':' + secondEl + '.' + peroid;  

    document.getElementById('digital-clock').innerHTML = currentTime;


}

digitalTime();