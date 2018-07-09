var startBtn = document.getElementsByClassName("start_btn");
var stopBtn= document.getElementsByClassName("stop_btn");
var showInstructions = document.querySelector(".main_container__instruction");
var instructions = ["READY?", "3", "2", "1", "Click when NOW! appears"];
var results = [];

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
  				for(var i=0; i<3; i++){
  				setTimeout(function(){
            console.log('CLICK NOW!');
            now();
          }, Math.floor(Math.random()*10000+1));

  				};
  			}, 1500);

  		}, 1500);

  	}, 1500);

  }, 1000);
});

stopBtn[0].addEventListener("click", function(){
console.log("You pressed STOP");
})

//Function that set and reset the display to tell when to click
function now(){
      showInstructions.innerHTML = 'NOW!';
  setTimeout(function(){
    showInstructions.innerHTML = '';
  }, 350);
}
