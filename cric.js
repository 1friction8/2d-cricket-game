let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : { win: 0, lost: 0,tie: 0 };
  score.displayScore = function() {
    return `Score Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;

  };
  showResult();
};


function genComputerChoice (){
  let randomNumber = Math.random() * 3;     
  // Assign choice based on the random number
  if (randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber <= 2) {
  return 'Ball';
  } else {
  return 'Stump';
  }
}

function getResult(userMove, computerMove) {
  if (userMove === 'Bat') {
    if (computerMove === 'Ball') {
      score.win++;
      return 'User Won.';
    } else if (computerMove === 'Bat') {
      score.tie++;
      return 'Its a tie.';
    } else if (computerMove === 'Stump') {
      score.lost++;
      return 'Computer has Won.';
    }
  } else if (userMove === 'Ball') {
    if (computerMove === 'Ball') {
      score.tie++;
      return 'Its a tie.';
    } else if (computerMove === 'Bat') {
      score.lost++;
      return 'Computer has Won.';
    } else if (computerMove === 'Stump') {
      score.win++;
      return 'User Won.';
    }
  } else {
    if (computerMove === 'Ball') {
      score.lost++;
      return 'Computer has Won.';
    } else if (computerMove === 'Bat') {
      score.win++;
      return 'User Won.';
    } else if (computerMove === 'Stump') {
      score.tie++;
      return 'Its a tie.';
    }
  }
}

  function showResult(userMove, computerMove, result){
    // console.log(score);
    localStorage.setItem('Score', JSON.stringify(score));
    document.querySelector('#user-move').innerText = 
      userMove ? `You have chosen ${userMove}` : '';

    document.querySelector('#computer-move').innerText =      computerMove ? `Computer have chosen ${computerMove}` : '';

    document.querySelector('#result').innerText = 
      result || '' ;

    document.querySelector('#score').innerText = score.displayScore();

    // alert(`You have chosen ${userMove}. Computer has chosen ${computerMove}. 
      
    // ${result}
      
    // ${score.displayScore()}`);
  }
  

   


