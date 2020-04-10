const startButton=document.getElementById('start-btn');
const nextButton=document.getElementById('next-btn');
const questionContainerElement=document.getElementById('question-container');
let shuffledQuestion, currentQuestionIndex;
const questionElement = document.getElementById('question');
const answerButtonsElements = document.getElementById('answer-button');

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++ 
    setNewQuestion()
})
function startGame(){
    startButton.classList.add('hide');
    shuffledQuestion = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove('hide');
    setNewQuestion();
}

function setNewQuestion(){
    resetState()
    showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText= answer.text
        button.classList.add('answer')
        if(answer.correct){
            button.dataset.correct = answer.correct 
        }
        button.addEventListener('click' , selectAnswer)
        answerButtonsElements.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while (answerButtonsElements.firstChild){
        answerButtonsElements.removeChild(answerButtonsElements.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct 
    setStatusClass(document.body , correct)
    Array.from(answerButtonsElements.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestion.length > currentQuestionIndex + 1)
         nextButton.classList.remove('hide')
    else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element , correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which is the only bird that can eat with its feet with its beak?',
        answers:[
            { text : 'Parrot' , correct: true},
            {
                text :'Penguin' , correct: false
            },
            {text : 'Kiwi' , correct: false},
            {text : 'Sparrow' , correct: false}
        ]
    },
    {
        question:"Spiders aren't insects, instead they fall under what?",
        answers:[{text : 'Chodarata' , correct: false} ,{
            text : 'Arachnids' , correct: true
        },{text :'Arthopods' ,  correct: false},
        {text :'Annelids' ,  correct: false}
        ]
    },
    {
        question:"How many parrot species are there in amazon?",
        answers:[{text : '50' , correct: false} ,{
            text : '40' , correct: false
        },{text :'100' ,  correct: false},
        {text :'20' ,  correct: true}
        ]
    },
    {
        question: "Which is the largest lizard?",
        answers:[{text : 'Asian water lizard' , correct: false} , { text: 'Nile Monitor' , correct : false
        } , {
            text: 'Komodo Dragon' , correct: true }, {text: 'Emerald Tree Monitor' , correct: false}]
    },
    {
        question: "When was the project tiger in India launched?",
        answers:[{text: '1977' , correct : false } , {text :'1973' , correct: true } , {text :'1975' , correct: false } , {text :'1980' , correct: false }]
    },
    {
        question: "Which is the largest of all shark?",
        answers:[{text:'Bull Shark' , correct: false } , {text:'Whale shark' , correct: true} , {text:'White shark' , correct: false}, {text:'Gangetic Shark' , correct : false}]
    }
]
