var userName = document.querySelector('#userName');
var gameOver = document.querySelector('#gameOver');
var userScore = document.querySelector('#userScore');

var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
var submitBtn = document.querySelector('#submitScore');
var secondsRemaining = 91;

function startTimer (){
    var interval = setInterval(function(){
        secondsRemaining--;
        document.querySelector('#timerDisplay').innerHTML = secondsRemaining;

        if(secondsRemaining === 0){
            clearInterval(interval);
            document.querySelector('#boxTwo').setAttribute ('style', 'display: none');

            document.querySelector('#boxThree').setAttribute('style', 'display:block');
        }
        else if(currentIndex === 5){
            clearInterval(interval);

            document.querySelector('#boxTwo').setAttribute ('style', 'display: none');

            document.querySelector('#boxFour').setAttribute ('style', 'display: block');

            score = (score*secondsRemaining);
        };
    },1000);
}
submitBtn.addEventListener('click', function(event){
    event.stopPropagation();
  
    var initials = userName.value;
  
    var finalScore = {
      initials,
      score
    };
    highscores.push(finalScore)
    localStorage.setItem('highscores', JSON.stringify(highscores));
    
  })