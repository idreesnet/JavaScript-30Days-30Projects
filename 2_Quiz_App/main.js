const questions  = [
    {
        'question': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b' : 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'question': 'In what year JavaScript was launched?',
        'a': '1996',
        'b' : '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'question': 'What does CSS stands for?',
        'a': 'Hypertext Markup Language',
        'b' : 'Cascading Style Sheet',
        'c': 'JavaScript Object Notation',
        'd': 'Computer Software System',
        'correct': 'b'
    },
    {
        'question': 'JavaScript is which type of programming language?',
        'a': 'compiler',
        'b': 'nueral language',
        'c' : 'interpreter',
        'd': 'natural language',
        'correct': 'c'
    }
];

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll('.options');


const loadQuestion = () => {
    if(index === total){
        endQuiz()
    }
    reset();
    const data = questions[index];
    queBox.innerText = `${index+1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let selectedAns;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                selectedAns = input.value;
            }
    })
    return selectedAns;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align: center" >
        <h3> Thank you for playing the Quiz </h3>
        <h2> ${right} / ${total} are correct </h2>
    </div>
    `;
}


// inital call 
loadQuestion();
