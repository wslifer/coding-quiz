var startQuiz = document.querySelector('#startQuiz');

var score = 0

startQuiz.addEventListener('click', function(event){
    event.stopPropagation();
    /* startTimer(); */
    document.querySelector('#boxOne').style.display = 'none';
    document.querySelector('#boxTwo').style.display = 'block';
    /* showQ(); */
});