window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var hour= 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendHours = document.getElementById("hours")
    var buttonStart = document.getElementById('Start');
    var buttonStop = document.getElementById('Pause');
    var buttonReset = document.getElementById('Reset');
    var Interval;
    var buttonTest = document.getElementById('Test');
    buttonTest.onclick = function () {
      alert('Something')
    }
    buttonStart.onclick = function() {
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    buttonReset.onclick = function() {
       clearInterval(Interval);
       tens = "00";
       seconds = "00";
       hour="00";
       appendTens.innerHTML = tens;
       appendSeconds.innerHTML = seconds;
       appendHours.innerHTML=hour;
    }
    function startTimer () {
      tens++; 
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      if (tens > 9){
        appendTens.innerHTML = tens;
      } 
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
      if (seconds >59) 
      {
        console.log("hour");
        hour ++;
        appendHours.innerHTML= "0" + hour;
        seconds =0;
        appendSeconds.innerHTML="0" +0;
      }
      if (hour >9)
      {
        appendHours.innerHTML =hour;
      }
    }
}