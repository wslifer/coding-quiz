var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
var leaderboard = document.querySelector('#leaderboardDisplay');

window.addEventListener('load', function(){printHighscore()});

function printHighscore(){
    highscores = scoreSorter(highscores, 'score');
    for(var i = 0; i < highscores.length; i++){
        var points = document.createElement('li');
        var player = document.createTextNode(highscores[i].initials + ': ' + highscores[i].score);
        points.appendChild(player);
        leaderboard.appendChild(points);
    };
}


//Looked this part up because I had in my pseudo code that I wanted scores to be sorted and had no clue how to do it. 
function scoreSorter(array, key){
    return array.sort(function(a,b){
        if(a.score < b.score){
            return 1;
        }
            return -1;
        
    });
}