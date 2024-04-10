const buttonDice = document.getElementById('buttonDice');
const buttonPlay = document.getElementById('buttonPlay');
const buttonPass = document.getElementById('buttonPass');
const buttonSubmitName = document.getElementById('buttonSubmitName');
let totalScore = 0;
let currentScore = 0;
let throws = 0;
let totalScore2 = 0;
let currentScore2 = 0;
let throws2 = 0;
let currentplayer = 0;
let playerName1 = document.getElementById('inputName');
let playerName2 = document.getElementById('inputName2');
const formName = document.querySelector('form');
formName.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('winningMessage').innerText = "Game starts and good luck!";
    buttonSubmitName.disabled = true;
    document.getElementById('pGame').innerText = "Hi " + playerName1.value + "!";
    document.getElementById('pGame2').innerText = "Hi " + playerName2.value + "!";
    buttonPass.disabled = false;
    buttonPlay.disabled = false;
    totalScore = 0;
    currentScore = 0;
    throws = 0;
    totalScore2 = 0;
    currentScore2 = 0;
    throws2 = 0;
    currentplayer = 1;
    document.getElementById('currentScoreMessage').innerText = "Your current score: " + currentScore;
    document.getElementById('totalScoreMessage').innerText = "Your total score: " + totalScore;
    document.getElementById('currentScoreMessage2').innerText = "Your current score: " + currentScore;
    document.getElementById('totalScoreMessage2').innerText = "Your total score: " + totalScore;
    document.querySelectorAll('#dicecontainer > .die').forEach(die => {
        die.style.display = 'none';
    })
});
buttonPlay.addEventListener('click', event => {
    event.preventDefault();
    const rand = Math.random();
    const rand6 = rand * 6;
    const diceNumber = Math.ceil(rand6);
    document.querySelectorAll('#dicecontainer > .die').forEach(die => {
        die.style.display = 'none';
    })
    switch (diceNumber) {
        case 1:
            document.getElementById('dieOne').style.display = 'flex';
            break;
        case 2:
            document.getElementById('dieTwo').style.display = 'flex';
            break;
        case 3:
            document.getElementById('dieThree').style.display = 'flex';
            break;
        case 4:
            document.getElementById('dieFour').style.display = 'flex';
            break;
        case 5:
            document.getElementById('dieFive').style.display = 'flex';
            break;
        case 6:
            document.getElementById('dieSix').style.display = 'flex';
            break;
    }
    //player 1
    if (currentplayer === 1) {
        currentScore = currentScore + diceNumber;
        document.getElementById('currentScoreMessage').innerText = "Your current score: " + currentScore;
        throws++;
        if (diceNumber === 1) {
            currentScore = 0;
            document.getElementById('currentScoreMessage').innerText = "Your current score: 0";
            currentplayer = 2;
        }
        if (totalScore >= 100) {
            document.getElementById('winningMessage').innerText = playerName1.value + " Congratulations you win! You have thrown the dice " + throws + " times. Write the names again if you want to play.";
            document.getElementById('buttonSubmitName').disabled = false;
            document.querySelectorAll('#dicecontainer > .die').forEach(die => {
                die.style.display = 'none';
            })
            buttonPass.disabled = true;
            buttonPlay.disabled = true;
        } 
    } else if (currentplayer === 2) {
        currentScore2 = currentScore2 + diceNumber;
        document.getElementById('currentScoreMessage2').innerText = "Your current score: " + currentScore2;
        throws2++;
        if (diceNumber === 1) {
            currentScore2 = 0;
            document.getElementById('currentScoreMessage2').innerText = "Your current score: 0";
            currentplayer = 1;
        }
        if (totalScore2 >= 100) {
            document.getElementById('winningMessage').innerText = playerName2.value + " Congratulations you win! You have thrown the dice " + throws2 + " times. Write the names again if you want to play.";
            document.getElementById('buttonSubmitName').disabled = false;
            document.querySelectorAll('#dicecontainer > .die').forEach(die => {
                die.style.display = 'none';
            })
            buttonPass.disabled = true;
            buttonPlay.disabled = true;
        }
    }
});
buttonPass.addEventListener('click', event => {
    if (currentplayer === 1) {
        currentplayer = 2;
        totalScore = totalScore + currentScore;
        document.getElementById('totalScoreMessage').innerText = "Your total score: " + totalScore;
        document.getElementById('currentScoreMessage').innerText = "Your current score: 0";
        currentScore = 0;
        const name = document.getElementById('pGame').innerText;
        if (totalScore >= 100) {
            document.getElementById('buttonSubmitName').disabled = false;
            document.querySelectorAll('#dicecontainer > .die').forEach(die => {
                die.style.display = 'none';
            })
            buttonPass.disabled = true;
            buttonPlay.disabled = true;
            document.getElementById('winningMessage').innerText = name + " Congratulations you win! You have thrown the dice " + throws + " times. Write the names again if you want to play.";
        } 
    }   else if (currentplayer === 2) {
        currentplayer = 1;
        totalScore2 = totalScore2 + currentScore2;
        document.getElementById('totalScoreMessage2').innerText = "Your total score: " + totalScore2;
        document.getElementById('currentScoreMessage2').innerText = "Your current score: 0";
        currentScore2 = 0;
        const name2 = document.getElementById('pGame2').innerText;
        if (totalScore2 >= 100) {
            document.getElementById('buttonSubmitName').disabled = false;
            document.querySelectorAll('#dicecontainer > .die').forEach(die => {
                die.style.display = 'none';
            })
            buttonPass.disabled = true;
            buttonPlay.disabled = true;
            document.getElementById('winningMessage').innerText = name2 + " Congratulations you win! You have thrown the dice " + throws2 + " times. Write the names again if you want to play.";
        }
    }
})