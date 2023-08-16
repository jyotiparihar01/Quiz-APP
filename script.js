const questions=[
    {
        'que':'Who is the father of HTML?',
        'a':'Rasmus Lerdorf',
        'b':'Tim Berners-Lee',
        'c':' Brendan Eich',
       'd': 'Sergey Brin',
       'correct':'b'


    },
    {

        'que':'What does the abbreviation HTML stand for?',
        'a':'High Text Markup language',
        'b':'HTML stands for HyperText Markup Language',
        'c':'HyperText Markdown Language',
        'd':'None of the above',
        'correct':'b'
    },
    {
       'que': 'Which tag is used for inserting the largest heading in HTML?',
       'a': 'head',
       'b': 'heading',
       'c': '<h6>',
       'd': '<h1>',
       'correct':'d'

    },
    {

     'que':   'HTML program can be read and rendered by ___.',
         'a': 'Compiler',
         'b': 'Server',
         'c':  'Web Browser',
         'd': 'Interpreter',
          'correct':'c'
    }
    
]
let index = 0;
let total = questions.length;
let right = 0,
wrong = 0;
const quesBox = document.getElementById("quesBox")
const optioninput = document.querySelectorAll(".Option")
const loadQuestion = () => {

    if(index===total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}`;
    optioninput[0].nextElementSibling.innerText = data.a;
    optioninput[1].nextElementSibling.innerText = data.b;
    optioninput[2].nextElementSibling.innerText = data.c;
    optioninput[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () => {
    const data = questions[index];

    const ans = getanswer()
    if(ans === data.correct){
right++;
    }
    else{
wrong++;
    }
    index++
    loadQuestion();

return;
    
}
const getanswer = () => {
    let answers;
    optioninput.forEach(
        (input) => {
if(input.checked){
    answers = input.value;
    
}
        }
    )
    return answers;
}
const reset = () =>{
    optioninput.forEach(
        (input) => {
        input.checked = false;
        }
    )
}
const endQuiz =()=>{
    document.getElementById("box2").innerHTML = `
    <h2> End Quiz </h2>
    <h2> ${right}/${total} Are correct answers. </h2>
    `
}
loadQuestion();
