const quizData = [
    {
        question: "What does HTML stand for",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language",

        ],
        correct: 0,// Index of the correct answer in the options array
    },
    {
        question: "Which HTML element is used to define the structure of an HTML document?",
        options: [
            "<header>",
            "<article>",
            "<body>",
            "<format>",

        ],
        correct: 2,
    },
        {
        question: "What does the href attribute in the anchor (<a>) tag specify?",
        options: [
            "The link's destination URL",
            "The link's text color",
            "The link's font size",
            "The link's background color",

        ],
        correct: 0,
    },
    {
        question: "Which HTML tag is used for creating an ordered list?",
        options: [
            "<ol>",
            "<ul>",
            "<li>",
            "<dl>",

        ],
        correct: 0,
    },
    {
        question: "What does the HTML <meta> tag do?",
        options: [
            "Defines a block of text",
            "Specifies metadata about the document",
            "Embeds an image in the document",
            "Creates a line break in the document",

        ],
        correct: 1,
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            "text-style",
            "font-color",
            "text-color",
            "color",

        ],
        correct: 3,
    },
    {
        question: "How can you center an element horizontally in CSS?",
        options: [
            "margin: 0 auto",
            "align: center",
            "text-align: center;",
            "padding: auto;",

        ],
        correct: 0,
    },
    {
        question: "Which CSS selector is used to select all elements with the class example?",
        options: [
            "#example",
            ".example",
            "example:",
            "*example",

        ],
        correct: 1,
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheet",
            "Computer Style Sheet",
            "Colorful Style Sheet",
            "Creative Style Sheet",

        ],
        correct: 0,
    },
    {
        question: "How can you link an external CSS file to an HTML document?",
        options: [
            `<link rel="stylesheet" type="text/css" href="styles.css">`,
            `<style src="styles.css">`,
            `<css href="styles.css">`,
            `<link type="text/css" src="styles.css">`,

        ],
        correct: 0,
    },
    {
        question: `What does the "typeof" operator in JavaScript return for an array?`,
        options: [
            "array",
            "object",
            "number",
            "string",

        ],
        correct: 1,
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: [
            "var myVar;",
            "let myVar;",
            "const myVar;",
            "All of the above",

        ],
        correct: 3,
    },
    {
        question: "What does the "===" operator in JavaScript do?",
        options: [
            "Compares two values for equality without type conversion",
            "Assigns a value to a variable",
            "Compares two values for equality with type conversion",
            "Compares two values for inequality",

        ],
        correct: 0,
    },
    {
        question: "What is the DOM in JavaScript?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Document Order Model",
            "Document Output Model",

        ],
        correct: 0,
    },
    {
        question: "What function is used in JavaScript to print content to the browser's console?",
        options: [
            "console.log()",
            "print()",
            "display()",
            "log()",

        ],
        correct: 0,
    },

]

const quiz = document.querySelector('#quiz'); // Reference to the quiz container

const answerElm = document.querySelectorAll(".answer"); // Array of answer radio buttons
const [questionElm, option_1, option_2, option_3, option_4]=document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4");
const submitBtn = document.querySelector("#submit");// Reference to the submit button

let currentQuiz = 0;// Index to keep track of the current quiz question
let score = 0;// Initialize the score to 0

// Function to load a quiz question and its options
const loadQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    console.log(options);

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    options.forEach(
        (curOotion, index) => (window[`option_${index + 1}`].innerText = curOotion)
        );

}

loadQuiz(); // Load the first quiz question

const getSelectedOption = ()=> {
    answerElm.forEach((currOption, index) => {
        if(currOption.checked) {
             ans_index =  index;
        }
});
 return ans_index;
};

// Function to clear the selected answers
const deselectedAnswers = () => {
    return answerElm.forEach((curElem) => curElem.checked = false )

}

// Event listener for the submit button
submitBtn.addEventListener('click',()=> {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct) {
        score += 1; 
    }

    currentQuiz++;// Move to the next question

    if(currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    }
    else {
         // Display the final score and an option to play again
        quiz.innerHTML = `
        <div class="result">
        <h2> Your Score: ${score}/${quizData.length} Correct Answers</h2>
        <p>Congratulations on completing the quiz!</p>
        <button class="reload-button" onclick="location.reload()">Play Again</button>
        </div>
        ` 
    }
});