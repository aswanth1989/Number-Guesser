let min = 1,
    max = 3,
    winningNumber = getRandomNum(min,max),
    guessesLeft = 3;

const uiGame = document.getElementById('game'),
      uiMinNum = document.querySelector('.min-num'),
      uiMax = document.querySelector('.max-num'),
      uiGuessBtn = document.querySelector('#guess-btn'),
      uiGuessInput = document.querySelector('#guess-input'),
      uiMessage = document.querySelector('.message');

//Assign UI min and max

uiMinNum.textContent = min;
uiMax.textContent = max;

uiGame.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

uiGuessBtn.addEventListener('click',function(){
    let guess = parseInt(uiGuessInput.value);
    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
        
    }else{
        if(guess === winningNumber){
            gameOver(true,`${winningNumber} is correct`);
        }else{
            guessesLeft -= 1;
            if(guessesLeft === 0){
                gameOver(false,`Game over, YOU lost. Winning Number is ${winningNumber}.`);
            }else{
                uiGuessInput.style.borderColor='red';
                uiGuessInput.value = '';
                setMessage(`${guess} is not correct, ${guessesLeft} Guesses Left`,'red');
            }
        }
    }
});


function setMessage(msg,color){
    uiMessage.style.color=color;
    uiMessage.textContent = msg;
}

function gameOver(won,msg){
    let color;
    won === true ? color='green':color='red'
    uiGuessInput.disabled = true;
    uiGuessInput.style.borderColor=color;
    setMessage(msg,color);

    uiGuessBtn.value = 'Play Again';
    uiGuessBtn.className += 'play-again';
}

function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}