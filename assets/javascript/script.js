var startQuiz = document.querySelector("#startQuiz");
var quizBtn = document.querySelectorAll(".quizBtn");

var score = 0;
var currentIndex = 0;

startQuiz.addEventListener("click", function (event) {
  event.stopPropagation();
  startTimer();
  document.querySelector("#boxOne").setAttribute('style', 'display: none');
  document.querySelector("#boxTwo").setAttribute('style', 'display: block' );
  showQ();
});

function showQ() {
  var question = quizQ[currentIndex];

  document.querySelector("#title").innerHTML = question.title;
  document.querySelector("#ansA").innerHTML = question.choices[0];
  document.querySelector("#ansB").innerHTML = question.choices[1];
  document.querySelector("#ansC").innerHTML = question.choices[2];
  document.querySelector("#ansD").innerHTML = question.choices[3];
}
for (var i = 0; i < quizBtn.length; i++) {
  quizBtn[i].addEventListener("click", function userChoice(event) {
    event.stopPropagation();
    if (event.currentTarget.innerText === quizQ[currentIndex].answer) {
      score++;
      console.log(score);
      document.querySelector("#checkAns").innerHTML = "Correct!";
    } else {
      document.querySelector("#checkAns").innerHTML = "Incorrect!";
      secondsRemaining = secondsRemaining - 15; 
    }
    currentIndex++;
    if (currentIndex < 5) {
      showQ();
    }
  });
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
