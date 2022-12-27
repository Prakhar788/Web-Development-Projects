let score = [0,0];
function Game(e){
    if(score[0] === 0 && score[1] === 0){
        document.getElementById('series').innerHTML = "Score 5 points to WIN series"
    }

    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }
    function computerPlay(n){
        if (n == 0){
            return 'Rock';
        }
        else if (n == 1){
            return 'Paper';
        }
        else if (n == 2){
            return 'Scissor';
        }
    }

    function playRound(playerSelection, computerSelection){
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        if (playerSelection == "ROCK" && computerSelection == "SCISSOR"){
            score[0] += 1;
            return 'win'
        }
        else if (playerSelection == "SCISSOR" && computerSelection == "PAPER"){
            score[0] += 1;
            return 'win'
        }
        else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
            score[0] += 1;
            return 'win'
        }
        else if (computerSelection == "ROCK" && playerSelection == "SCISSOR"){
            score[1] += 1;
            return 'lose';
        }
        else if (computerSelection == "SCISSOR" && playerSelection == "PAPER"){
            score[1] += 1;
            return 'lose';
        }
        else if (computerSelection == "PAPER" && playerSelection == "ROCK"){
            score[1] += 1;
            return 'lose';
        }
        else if (playerSelection===computerSelection){
            score[0] += 1;
            score[1] += 1;
            return "draw";
        }
    }

    const playerSelection = e.target.value;
    const computerSelection = computerPlay(getRandomInt(3));
    let result = playRound(playerSelection,computerSelection);

    if(result === 'win'){
        document.getElementById('round').innerHTML = `You WON! ${playerSelection} beats ${computerSelection}`;
    }
    else if(result === 'lose'){
        document.getElementById('round').innerHTML = `You LOSE! ${computerSelection} beats ${playerSelection}`;
    }
    else{
        document.getElementById('round').innerHTML = "Round DRAW!";
    }

    document.getElementById('you').innerHTML = `Your Score: ${score[0]}`;
    document.getElementById('bot').innerHTML = `Bot Score: ${score[1]}`;

    if(score.includes(5)){
        if(score[0] > score[1]){
            document.getElementById('series').innerHTML = "You WON this series"
        }
        else{
            document.getElementById('series').innerHTML = "You LOSE!"
        }
        score=[0,0];
    }
}

const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach((btn)=>{
	btn.addEventListener('click',(e)=>{                          //Iterate through each button and for each one we add a 'click' listener
		Game(e)
	});
});                                                