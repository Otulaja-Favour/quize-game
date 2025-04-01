let setofQuestiions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        answer: "Harper Lee"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10", "12"],
        answer: "8"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Go", "Au", "Ag", "Gd"],
        answer: "Au"
    },
    {
        question: "Which year did World War II end?",
        options: ["1942", "1945", "1948", "1950"],
        answer: "1945"
    },
    {
        question: "Who discovered gravity?",
        options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Iron", "Gold", "Diamond", "Platinum"],
        answer: "Diamond"
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
document.getElementById('questiontext').innerText = `  ${currentQuestionIndex + 1}.  ${currentQuestion.question} `;

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



