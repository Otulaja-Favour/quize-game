let setofQuestiions = [
    {question: 'who is you main dad huh',
        options: ['buhari', 'atiku', 'otus'],
        answer: 'otus'
    },
    {question: 'who is you main dad tea',
        options: ['buhari', 'atiku', 'otus'],
        answer: 'otus'
    },
    {question: 'who is you main dad abi',
        options: ['buhari', 'atiku', 'otus'],
        answer: 'otus'
    }
]

let headersOfQuestion = document.getElementsByTagName('questiontext');
let questionArea = document.getElementById('questionArea')
let showResult = document.getElementById('show')
let secondShow = document.getElementById('shows')
// let result = document.createElement('p')
let currentQuestionIndex = 0
let score = 0

function perQuestion(){
const currentQuestion = setofQuestiions[currentQuestionIndex];
document.getElementById('questiontext').innerText = currentQuestion.question

questionArea.innerHTML = '';
currentQuestion.options.forEach((option) => {
let label = document.createElement('label')
    label.classList.add('labels');
    
    label.innerHTML = `<input type="radio" name="setofQuestiions" value="${option}"> ${option}`;
    questionArea.appendChild(label);
})

}
function submit() {
    const selectedOption = document.querySelector('input[name="setofQuestiions"]:checked');

    if (!selectedOption) {
        alert('Please select an option!');
        return;
    }

    const answer =  setofQuestiions[currentQuestionIndex].answer;
    if(selectedOption.value === answer){
        score++
        alert('opor')
    currentQuestionIndex++;  

    }else{
        alert('olodo')
    }
}
 document.getElementById('submission').addEventListener('click', nextQuestion);
function nextQuestion() {
    // currentQuestionIndex++;  
    if (currentQuestionIndex < setofQuestiions.length) {
        perQuestion(); 
    } else {
        alert('Quiz completed!');  
    }
   
}
nextQuestion()
perQuestion()







function sorting(){

let headersOfQuestion = document.getElementsByTagName('questiontext1');
let questionArea = document.getElementById('questionArea1')


setofQuestiions.forEach((value, index) => {
    let questionDiv = document.createElement('div')
    questionDiv.classList.add('questiondiv');
    questionDiv.textContent = `${index + 1}. ${value.question}`;

let divOptions = document.createElement('div')
divOptions.classList.add('divoption')

value.options.forEach((options) => {
    let label = document.createElement('label');
    label.classList.add('labels')
    let radio = document.createElement('input')
    radio.classList.add('radios')
    radio.type = 'radio';
    radio.name = `radio-${index}`; //giving the radio a name
radio.value = options

    label.appendChild(radio);
    label.appendChild(document.createTextNode(options));
    
divOptions.appendChild(label)
})
questionArea.appendChild(questionDiv);
questionArea.appendChild(divOptions);
// questionArea.appendChild()

})

}

let questiontag = document.querySelectorAll('.questiontag')
let questiontag2 = document.querySelectorAll('.questiontag2')
document.getElementById('sortQuestion').addEventListener('click', function(){
    // document.getElementById('questionArea').innerHTML = "";
    sorting()
    questiontag.forEach((element) => {
        element.style.display = 'none'; 
    });
    document.getElementById('sortQuestion').style.display = 'none'  
    questiontag2.forEach((element) => {
        element.style.display = 'block'; 
    });
    document.getElementById('sortQuestion').style.display = 'none' 
    document.getElementById('sortQuestion2').style.display = 'block'   
    // document.getElementById('questionArea').innerHTML = "";
})


document.getElementById('sortQuestion2').addEventListener('click', function(){
    document.getElementById('questionArea').innerHTML = "";
    nextQuestion()
perQuestion()
    questiontag2.forEach((element) => {
        element.style.display = 'none'; 
    });
    
  document.getElementById('sortQuestion2').style.display = 'none' ;

    questiontag.forEach((element) => {
        element.style.display = 'block'; 
    });
    
    document.getElementById('sortQuestion').style.display = 'block'  
})

let timeLeft = 60; 
let timerDisplay = document.getElementById('time'); 

function startTimer() {
    let countdown = setInterval(() => {
        if (timeLeft > 0) {
            timerDisplay.innerText = `Time Left: ${timeLeft} sec`;
            timeLeft--;
        } else {
            clearInterval(countdown);
            alert('Time is up! Restarting...');
            restartTimer(); 
        }
    }, 1000);
}

function restartTimer() {
    timeLeft = 60;
    startTimer(); 
}
startTimer();



