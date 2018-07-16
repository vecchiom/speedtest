var startBtn = document.getElementsByClassName("start_btn");
var stopBtn= document.getElementsByClassName("stop_btn");
var clickSpace = document.querySelector(".main_container");
var showInstructions = document.querySelector(".main_container__instruction");
var showResults = document.querySelector(".showResults");
var list = document.querySelector(".list")
var reflex = document.querySelector(".reflex")
var instructions = ["READY?", "3", "2", "1", "Click when NOW! appears"];
var results = [];
var flag = false;
var startTime = 0;
var stopTime = 0;
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

startBtn[0].addEventListener("click", function(){
  setTimeout(function(){
  	console.log('READY?');
    showInstructions.innerHTML = 'READY?';
  	setTimeout(function(){
  		console.log('-- 3 --');
      showInstructions.innerHTML = '-- 3 --';
  		setTimeout(function(){
  			console.log('-- 2 --');
        showInstructions.innerHTML = '-- 2 --';
  			setTimeout(function(){
  				console.log('-- 1 --');
          showInstructions.innerHTML = '-- 1 --';
              setTimeout(function(){
                  showInstructions.innerHTML = '';
                  //Function for random CICK! time
          				setTimeout(function(){
                    console.log('CLICK NOW!');
                    now();
                    flag = true;
                    youCanClick();
                  }, Math.floor(Math.random()*10000+1));
                  //end of function
              }, 1000);

  			}, 1000);

  		}, 1000);

  	}, 1000);

  }, 1000);
});

stopBtn[0].addEventListener("click", function(){
  results = [];
  showResults.innerHTML = results;
  reflex.innerHTML = "";
})

//Function that set and reset the display to tell when to click
function now(){
      showInstructions.innerHTML = 'CLICK!';
      startTime = Date.now();
  setTimeout(function(){
    showInstructions.innerHTML = '';

  }, 350);
}

function youCanClick(){
    //Event handler on CLICK
    clickSpace.onclick = function(){
      if (flag){
        stopTime = Date.now();
        var total = stopTime-startTime;
        reflex.innerHTML = reflexType(total);
        // showResults.innerHTML = "Today " + d.getDate() + " of " + months[(d.getMonth()+1)] + " you clicked with a delay of " + (total)+ " ms!";
        flag = false;
        results.push(total);
        console.log(results);
        for (var i = 0 ; i <= results.length; i++){
          console.log(results[i]);
          showResults.innerHTML = results+" (ms)";

        };
      };
  };
}

function reflexType(n){
  if (n < 300){
    return "EXCELLENT reflexes! You're age must still be under 30yo..."
  }else if (n>300 && n < 400){
    return "Pretty GOOD!"
  } else if (n>400 && n < 600){
    return "Your reflexes are a little SLOW"
  } else {
  return "Damn, You must be drunk..."
}

}
