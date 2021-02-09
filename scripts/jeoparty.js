
///////////////////////////// Look and feel ///////////////////////////
///////////////////// Classes and ID's assignments ////////////////////

$(() => {

// create container
const $divContainer = $('<div>').addClass('container');
$('body').append($divContainer);

// create div for category
for (let i = 0; i < 5; i++) {
    const $divSubject = $('<div>').addClass('subject' + i);
    $($divContainer).append($divSubject);
}

// create divs for questions
for (let i = 0; i < 6; i++) {
    const $divQuestion = $('<div>').addClass('question');
    if ( i === 0) {
        $divQuestion.addClass('category').attr('id', 'category' + i);
    } else if ( i >0 && i < 6) { 
        $divQuestion.addClass('question' + i).attr('id', 'questionA' + i);
    }
    $('.subject0').append($divQuestion);
}

for (let i = 0; i < 6; i++) {
    const $divQuestion = $('<div>').addClass('question');
    if ( i === 0) {
        $divQuestion.addClass('category').attr('id', 'category1');
    } else if ( i >0 && i < 6) { 
        $divQuestion.addClass('question' + i).attr('id', 'questionB' + i);
    }
    $('.subject1').append($divQuestion);
}

for (let i = 0; i < 6; i++) {
    const $divQuestion = $('<div>').addClass('question');
    if ( i === 0) {
        $divQuestion.addClass('category').attr('id', 'category2');
    } else if ( i >0 && i < 6) { 
        $divQuestion.addClass('question' + i).attr('id', 'questionC' + i);
    }
    $('.subject2').append($divQuestion);
}    

for (let i = 0; i < 6; i++) {
    const $divQuestion = $('<div>').addClass('question');
    if ( i === 0) {
        $divQuestion.addClass('category').attr('id', 'category3');
    } else if ( i >0 && i < 6) { 
        $divQuestion.addClass('question' + i).attr('id', 'questionD' + i);
    }
    $('.subject3').append($divQuestion);
}

for (let i = 0; i < 6; i++) {
    const $divQuestion = $('<div>').addClass('question');
    if ( i === 0) {
        $divQuestion.addClass('category').attr('id', 'category4');
    } else if ( i >0 && i < 6) { 
        $divQuestion.addClass('question' + i).attr('id', 'questionE' + i);
    }
    $('.subject4').append($divQuestion);
}

// Create div and title for final answer
const $divFinalAnswer = $('<div>').addClass('final-answer').text('Your Score:');
$('body').append($divFinalAnswer);

// Create div for scoreboard
const $divScoreboard = $('<div>').addClass('scoreboard');
$('body').append($divScoreboard);

// Assign categories
$('#category0').text('All about Walter');
$('#category1').text('World Capitals');
$('#category2').text('Harry Potter');
$('#category3').text('CSS');
$('#category4').text('Space');

// Assign dollar values
$('.question1').text('$100');
$('.question2').text('$200');
$('.question3').text('$300');
$('.question4').text('$400');
$('.question5').text('$500');

///////////////////////////    Data   /////////////////////////

///// Category One
const answersCategoryOne = [
    {answer: 'Kimberly'},
    {answer: '3'},
    {answer: 'Philip, Gabriella, Luke'},
    {answer: 'Isabella'},
    {answer: '35'}
]

const categoryOneCorrectValue = [
    {rightQuestion: "c", value: 100},
    {rightQuestion: "b", value: 200},
    {rightQuestion: "b", value: 300},
    {rightQuestion: "a", value: 400},
    {rightQuestion: "c", value: 500},
];

const answerA1Choices = [
    {option: "a: ", question: "Who is Walter's long-lost cousin?"},
    {option: "b: ", question: "What is the name of Walter's favorite TV actress?"},
    {option: "c: ", question: "Who is Walter's wife and love of his life?"},
];

const answerA2Choices = [
    {option: "a: ", question: "What is the number of suits Walter owns?"},
    {option: "b: ", question: "How many children does Walter have?"},
    {option: "c: ", question: "What is the number of times Walter has been in jail?"},
];

const answeA3Choices = [
    {option: "a: ", question: "What are the names of the Three Stooges?"},
    {option: "b: ", question: "What are the names of Walter's children?"},
    {option: "c: ", question: "What are the names of the Three Musketeers?"},
];

const answerA4Options = [
    {option: "a: ", question: "Whats the name of Walter's gorgeous granddaughter?"},
    {option: "b: ", question: "What is the name of Walter's favorite TV actress?"},
    {option: "c: ", question: "What is the name of Walter's first girlfriend?"},
];

const answerA5Options = [
    {option: "a: ", question: "How many pushups can Walter do in one minute?"},
    {option: "b: ", question: "How many times has Walter clean a bathroom over his lifetime?"},
    {option: "c: ", question: "How long has Walter been married to Kimberly?"},
];

///// Category Two
const answersCategoryTwo = [
    {answer: 'The Capital of the United States.'},
    {answer: 'The Capital of France.'},
    {answer: 'The Capital of Spain.'},
    {answer: 'The Capital of Peru.'},
    {answer: 'The Capital of Ukraine'}
]

const categoryTwoCorrectValue = [
    {rightQuestion: "c", value: 100},
    {rightQuestion: "b", value: 200},
    {rightQuestion: "b", value: 300},
    {rightQuestion: "a", value: 400},
    {rightQuestion: "c", value: 500},
];

const answerB1Choices = [
    {option: "a: ", question: "What is Mexico?"},
    {option: "b: ", question: "What is Canada?"},
    {option: "c: ", question: "What is Washington D.C.?"},
];

const answerB2Choices = [
    {option: "a: ", question: "What is Africa?"},
    {option: "b: ", question: "What is Paris?"},
    {option: "c: ", question: "What is Europe"},
];

const answeB3Choices = [
    {option: "a: ", question: "What is Portugal?"},
    {option: "b: ", question: "What is Madrid?"},
    {option: "c: ", question: "What is Barcelona?"},
];

const answerB4Options = [
    {option: "a: ", question: "What is Lima?"},
    {option: "b: ", question: "What is Montevideo?"},
    {option: "c: ", question: "What is Quito?"},
];

const answerB5Options = [
    {option: "a: ", question: "What is Moldova?"},
    {option: "b: ", question: "What is Belarus?"},
    {option: "c: ", question: "What is Kyiv"},
];

///// Category Three
const answersCategoryThree = [
    {answer: "Harry Potter's house at Hogwarts"},
    {answer: "Harry Potter's wife."},
    {answer: 'Main headmaster at Hogwarts'},
    {answer: "Hogwart's favorite sport"},
    {answer: 'Creatures that pulled the carriages at Hogwarts.'}
]

const categoryThreeCorrectValue = [
    {rightQuestion: "c", value: 100},
    {rightQuestion: "b", value: 200},
    {rightQuestion: "b", value: 300},
    {rightQuestion: "a", value: 400},
    {rightQuestion: "c", value: 500},
];

const answerC1Choices = [
    {option: "a: ", question: "What is Ravenclaw?"},
    {option: "b: ", question: "What is Hufflepuff?"},
    {option: "c: ", question: "What is Gryffindor?"},
];

const answerC2Choices = [
    {option: "a: ", question: "Who is Hermione Granger?"},
    {option: "b: ", question: "Who is Ginny Weasley?"},
    {option: "c: ", question: "Who is Luna Lovegood?"},
];

const answeC3Choices = [
    {option: "a: ", question: "Who is Professor Minerva McGonagall?"},
    {option: "b: ", question: "Who is Professor Albus Dumbledore?"},
    {option: "c: ", question: "who is Professor Severus Snape?"},
];

const answerC4Options = [
    {option: "a: ", question: "What is Quidditch"},
    {option: "b: ", question: "What is Air Cricket?"},
    {option: "c: ", question: "Waht is Vanishing Baseball?"},
];

const answerC5Options = [
    {option: "a: ", question: "What are manticores?"},
    {option: "b: ", question: "What are hippogriffs?"},
    {option: "c: ", question: "What are thestrals?"},
];

///// Category Four
const answersCategoryFour = [
    {answer: 'What CSS stands for.'},
    {answer: 'The correct CSS syntax.'},
    {answer: 'Comment in a CSS file.'},
    {answer: 'Syntax to change text color.'},
    {answer: 'Syntax for hyperlinks without underline.'}
]

const categoryFourCorrectValue = [
    {rightQuestion: "c", value: 100},
    {rightQuestion: "b", value: 200},
    {rightQuestion: "b", value: 300},
    {rightQuestion: "a", value: 400},
    {rightQuestion: "c", value: 500},
];

const answerD1Choices = [
    {option: "a: ", question: "What is Colorful Style Sheets?"},
    {option: "b: ", question: "What is Computer Style Sheets?"},
    {option: "c: ", question: "What is Cascading Style Sheets?."},
];

const answerD2Choices = [
    {option: "a: ", question: "{body:color=black};"},
    {option: "b: ", question: "body{color:black};"},
    {option: "c: ", question: "body:color(black);"},
];

const answeD3Choices = [
    {option: "a: ", question: "What is //this is a comment// ?"},
    {option: "b: ", question: "What is /*this is a comment*/ ?"},
    {option: "c: ", question: "What is //this is a comment ?"},
];

const answerD4Options = [
    {option: "a: ", question: "What is color: ?"},
    {option: "b: ", question: "What is font-color: ?"},
    {option: "c: ", question: "What is text-color: ?"},
];

const answerD5Options = [
    {option: "a: ", question: "What is a{decoration:none;} ?"},
    {option: "b: ", question: "What is a{underline:none;} ?"},
    {option: "c: ", question: "What is a{text-decoration:none;} "},
];

///// Category Five
const answersCategoryFive = [
    {answer: 'Our own star.'},
    {answer: 'Third planet from the sun.'},
    {answer: 'Our own galaxy.'},
    {answer: 'No longer a planet.'},
    {answer: 'Closest star to the sun.'}
]

const categoryFiveCorrectValue = [
    {rightQuestion: "c", value: 100},
    {rightQuestion: "b", value: 200},
    {rightQuestion: "b", value: 300},
    {rightQuestion: "a", value: 400},
    {rightQuestion: "c", value: 500},
];

const answerE1Choices = [
    {option: "a: ", question: "What is Charlize Theron"},
    {option: "b: ", question: "What is the North Star?"},
    {option: "c: ", question: "What is the Sun?"},
];

const answerE2Choices = [
    {option: "a: ", question: "What is Mars?"},
    {option: "b: ", question: "What is Earth?"},
    {option: "c: ", question: "What is Venus?"},
];

const answeE3Choices = [
    {option: "a: ", question: "What is Triangulum?"},
    {option: "b: ", question: "What is the Milky Way?"},
    {option: "c: ", question: "What is Andromeda?"},
];

const answerE4Options = [
    {option: "a: ", question: "What is Pluto?"},
    {option: "b: ", question: "What is the Moon?"},
    {option: "c: ", question: "What is Neptune?"},
];

const answerE5Options = [
    {option: "a: ", question: "What is Barnard's Star?"},
    {option: "b: ", question: "What is Alpha Centauri A?"},
    {option: "c: ", question: "What is Proxima Centauri."},
];

///////////////////////// Functionality ///////////////////////

////////// //create click event


// grab button
const $openBtn = $('#questionA1');

// grab modal element
const $modal = $('#modal');

// grab close button
const $closeBtn = $('#close');



// event handlers

const openModal = () => {
    $modal.css('display', 'block')
}

const closeModal = () => {
    $modal.css('display', 'none')
}

// event listeners

$openBtn.on('click', openModal);

$closeBtn.on('click', closeModal);







// const $questionA1 = $('#questionA1');
// $questionA1.on('click', () => {
//     openModal()
// });



//console.log($questionA1)

})