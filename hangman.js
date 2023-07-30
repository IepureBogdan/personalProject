
// assigning variables


const letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
const countries = ['DENMARK' , 'GERMANY' , 'FRANCE' , 'ITALY' , 'HUNGARY' , 'POLAND' , 'SPAIN', 'ROMANIA', 'ALBANIA'];


const container= document.getElementById('container');
const hangmanDrawing= document.getElementById('hangmanDrawing');
const letterContainer=document.getElementById('letterContainer');
const optionsContainer = document.getElementById('optionsContainer');
const resetBtn = document.getElementById('resetBtn');
let gameWord = document.createElement('div');


let randomCountry = '';
let wrongAnswer = 0;
let maxWrongAnswer = 6;
let gameLetter = [];
let gamerChoice = [];
let buttonLetter = '';


// Buttons whith letters 

let letter
for(let i=0; i<letters.length;i++){
    let buttonA = document.createElement('div');
    letter = letters[i];
    buttonA.innerHTML = `<button id="${letter}" class="letterBtn" onclick = "chosenLetter('${letter}')">${letter}</button>`;
    
    letterContainer.append(buttonA);

}

// };
// generateBtn();

// letter Button function  

function chosenLetter(chosenLtr) {
    
    
// buttonLetter = chosenLtr;
    let letterIndex = randomCountry.indexOf(chosenLtr);
    document.getElementById(chosenLtr).disabled = true ;
    
    
    if (randomCountry.includes(chosenLtr)) {
        
        for (let i = 0; i < randomCountry.length; i++) {
            if (randomCountry[i] === chosenLtr) {
              gameLetter[i] = chosenLtr;
              gamerChoice.push(chosenLtr);
            }
          }
        gameLetter.splice(letterIndex , 1 , chosenLtr);
        gameWord.innerHTML = gameLetter.join('');

        
        
    }
    
    else {
        wrongAnswer += 1
        document.getElementById('hangmanDrawing').innerHTML = `<img src="Hangman assets/assets/picture${wrongAnswer}.png">`;
    }

    // test button task
    // letterContainer.style.backgroundColor = "red";
    console.log(gamerChoice);
    console.log(wrongAnswer);
    console.log(gamerChoice.length);
    console.log(randomCountry.length);
    console.log(letterIndex);
    console.log(gameLetter);
    
// Win / Lose section with setTimeout for better user experience

    if (wrongAnswer === maxWrongAnswer) {
        setTimeout( () => {
            alert(`you lost. The answer was ${randomCountry}`);
            window.location.reload();
            } , 300 );
        // alert(`you lost. The answer was ${randomCountry}`);
        // window.location.reload();
    } else if (gamerChoice.length === randomCountry.length) {
        setTimeout( () => {
            alert('you won');
            window.location.reload();
            } , 500 );
        //  alert('you won');
    }
    mistakesCounter.textContent = `Mistakes : ${wrongAnswer} from maximum of ${maxWrongAnswer}`;
    
}


//  set random country

function randomCtr () {
    randomCountry = countries[Math.floor(Math.random() * countries.length)];
};
randomCtr();

function displayWord() {
    
    // let gameLetter = document.createElement('p');

    for ( let i = 0 ; i < randomCountry.length; i ++) {
        let randomLetters = randomCountry.split(i,i+1);
        randomLetters = ` _ `
        // '<span class="underline">&nbsp;_&nbsp;</span>'
        // gameLetter += randomLetters;

        gameLetter.push(randomLetters);
    }
    
    
    
    gameWord.innerHTML = gameLetter.join('');
    
    optionsContainer.append(gameWord);

    gameWord.classList.add('randomCountry');

    

}
displayWord();



const mistakesCounter = document.createElement('div');
mistakesCounter.textContent = `Mistakes : ${wrongAnswer} from maximum of ${maxWrongAnswer}`;
optionsContainer.append(mistakesCounter);
mistakesCounter.classList.add('mistakesCounter');



// back button


// document.getElementById('backBtn').addEventListener('click', () => {alert('bet back to main')} );

//  function back() {
//     alert('bet back to main')
//  }










