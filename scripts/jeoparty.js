
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
        $divQuestion.addClass('question' + i).attr('id', '0.' + i);
    }
    $('.subject0').append($divQuestion);
}

for (let i = 0; i < 6; i++) {
    const $divQuestion = $('<div>').addClass('question');
    if ( i === 0) {
        $divQuestion.addClass('category').attr('id', 'category1');
    } else if ( i >0 && i < 6) { 
        $divQuestion.addClass('question' + i).attr('id', '1.' + i);
    }
    $('.subject1').append($divQuestion);
}

for (let i = 0; i < 6; i++) {
    const $divQuestion = $('<div>').addClass('question');
    if ( i === 0) {
        $divQuestion.addClass('category').attr('id', 'category2');
    } else if ( i >0 && i < 6) { 
        $divQuestion.addClass('question' + i).attr('id', '2.' + i);
    }
    $('.subject2').append($divQuestion);
}    

for (let i = 0; i < 6; i++) {
    const $divQuestion = $('<div>').addClass('question');
    if ( i === 0) {
        $divQuestion.addClass('category').attr('id', 'category3');
    } else if ( i >0 && i < 6) { 
        $divQuestion.addClass('question' + i).attr('id', '3.' + i);
    }
    $('.subject3').append($divQuestion);
}

for (let i = 0; i < 6; i++) {
    const $divQuestion = $('<div>').addClass('question');
    if ( i === 0) {
        $divQuestion.addClass('category').attr('id', 'category4');
    } else if ( i >0 && i < 6) { 
        $divQuestion.addClass('question' + i).attr('id', '4.' + i);
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

const data = [
	{id: '0.0', answer: 'Kimberly', question: 'c', value: 100, option1: 'a: ', q1: "Who is Walter's long-lost cousin?", option2: 'b: ', q2: "What is the name of Walter’s favorite TV actress?", option3: 'c: ', q3: "Who is Walter’s wife and love of his life?"},

	{id: '0.1', answer: '3', question: 'b', value: 200, option1: 'a: ', q1: 'What is the number of suits Walter owns?', option2: 'b: ', q2: 'How many children does Walter have?', option3: 'c: ', q3: 'What is the number of times Walter has been in jail?'},

	{id: '0.2', answer: 'Philip, Gabriella, Luke', question: 'b', value: 300, option1: 'a: ', q1: 'What are the names of the Three Stooges?', option2: 'b: ', q2: "What are the names of Walter's children?", option3: 'c: ', q3: 'What are the names of the Three Musketeers?'},

	{id: '0.3', answer: 'Isabella', question: 'a', value: 400, option1: 'a: ', q1: "What's the name of Walter's gorgeous granddaughter?", option2: 'b: ', q2: "What is the name of Walter's favorite TV actress?", option3: 'c: ', q3: "What is the name of Walter's first girlfriend?"},

	{id: '0.4', answer: '35', question: 'c', value: 500, option1: 'a: ', q1: 'How many pushups can Walter do in one minute?', option2: 'b: ', q2: 'How many times has Walter clean a bathroom over his lifetime?', option3: 'c: ', q3: 'How long has Walter been married to Kimberly?'},

	{id: '1.0', answer: 'The Capital of the United States.', question: 'c', value: 100, option1: 'a: ', q1: 'What is Mexico?', option2: 'b: ', q2: 'What is Canada?', option3: 'c: ', q3: 'What is Washington D.C.?'},

	{id: '1.1', answer: 'The Capital of France.', question: 'b', value: 200, option1: 'a: ', q1: 'What is Africa?', option2: 'b: ', q2: 'What is Paris?', option3: 'c: ', q3: 'What is Europe'},

	{id: '1.2', answer: 'The Capital of Spain.', question: 'b', value: 300, option1: 'a: ', q1: 'What is Portugal?', option2: 'b: ', q2: 'What is Madrid?', option3: 'c: ', q3: 'What is Barcelona?'},

	{id: '1.3', answer: 'The Capital of Peru.', question: 'a', value: 400, option1: 'a: ', q1: 'What is Lima?', option2: 'b: ', q2: 'What is Montevideo?', option3: 'c: ', q3: 'What is Quito?'},

	{id: '1.4', answer: 'The Capital of Ukraine', question: 'c', value: 500, option1: 'a: ', q1: 'What is Moldova?', option2: 'b: ', q2: 'What is Belarus?', option3: 'c: ', q3: 'What is Kyiv'},

	{id: '2.0', answer: "Harry Potter's house at Hogwarts", question: 'c', value: 100, option1: 'a: ', q1: 'What is Ravenclaw?', option2: 'b: ', q2: 'What is Hufflepuff?', option3: 'c: ', q3: 'What is Gryffindor?'},

	{id: '2.1', answer: "Harry Potter's wife.", question: 'b', value: 200, option1: 'a: ', q1: 'Who is Hermione Granger?', option2: 'b: ', q2: 'Who is Ginny Weasley?', option3: 'c: ', q3: 'Who is Luna Lovegood?'},

	{id: '2.2', answer: 'Main headmaster at Hogwarts', question: 'b', value: 300, option1: 'a: ', q1: 'Who is Professor Minerva McGonagall?', option2: 'b: ', q2: 'Who is Professor Albus Dumbledore?', option3: 'c: ', q3: 'who is Professor Severus Snape?'},

	{id: '2.3', answer: "Hogwarts' favorite sport", question: 'a', value: 400, option1: 'a: ', q1: 'What is Quidditch', option2: 'b: ', q2: 'What is Air Cricket?', option3: 'c: ', q3: 'What is Vanishing Baseball?'},

	{id: '2.4', answer: 'Creatures that pulled the carriages at Hogwarts.', question: 'c', value: 500, option1: 'a: ', q1: 'What are manticores?', option2: 'b: ', q2: 'What are hippogriffs?', option3: 'c: ', q3: 'What are thestrals?'},

	{id: '3.0', answer: 'What CSS stands for.', question: 'c', value: 100, option1: 'a: ', q1: 'What is Colorful Style Sheets?', option2: 'b: ', q2: 'What is Computer Style Sheets?', option3: 'c: ', q3: 'What is Cascading Style Sheets.'},

	{id: '3.1', answer: 'The correct CSS syntax.', question: 'b', value: 200, option1: 'a: ', q1: '{body:color=black};', option2: 'b: ', q2: 'body{color:black};', option3: 'c: ', q3: 'body:color(black);'},

	{id: '3.2', answer: 'Comment in a CSS file.', question: 'b', value: 300, option1: 'a: ', q1: 'What is //this is a comment// ?', option2: 'b: ', q2: 'What is /*this is a comment*/ ?', option3: 'c: ', q3: 'What is //this is a comment ?'},

	{id: '3.3', answer: 'Syntax to change text color.', question: 'a', value: 400, option1: 'a: ', q1: 'What is color: ?', option2: 'b: ', q2: 'What is font-color: ?', option3: 'c: ', q3: 'What is text-color: ?'},

	{id: '3.4', answer: 'Syntax for hyperlinks without underline.', question: 'c', value: 500, option1: 'a: ', q1: 'What is a{decoration:none;} ?', option2: 'b: ', q2: 'What is a{underline:none;} ?', option3: 'c: ', q3: 'What is a{text-decoration:none;} '},

	{id: '4.0', answer: 'Our own star.', question: 'c', value: 100, option1: 'a: ', q1: 'What is Charlize Theron', option2: 'b: ', q2: 'What is the North Star?', option3: 'c: ', q3: 'What is the Sun?'},

	{id: '4.1', answer: 'Third planet from the sun.', question: 'b', value: 200, option1: 'a: ', q1: 'What is Mars?', option2: 'b: ', q2: 'What is Earth?', option3: 'c: ', q3: 'What is Venus?'},

	{id: '4.2', answer: 'Our own galaxy.', question: 'b', value: 300, option1: 'a: ', q1: 'What is Triangulum?', option2: 'b: ', q2: 'What is the Milky Way?', option3: 'c: ', q3: 'What is Andromeda?'},

	{id: '4.3', answer: 'No longer a planet.', question: 'a', value: 400, option1: 'a: ', q1: 'What is Pluto?', option2: 'b: ', q2: 'What is the Moon?', option3: 'c: ', q3: 'What is Neptune?'},

    {id: '4.4', answer: 'Closest star to the sun.', question: 'c', value: 500, option1: 'a: ', q1: "What is Barnard's Star?", option2: 'b: ', q2: 'What is Alpha Centauri A?', option3: 'c: ', q3: 'What is Proxima Centauri.'}
]


//   Retrieves array with object that matches ID

console.log('*********** Modal Data *********************')
const modalData = data.filter(element => element.id === '0.0');
console.log(modalData)


console.log('************* Object for modal *******************')
const objectForModal = modalData.find(modalData => modalData.id === '0.0'
)
console.log(objectForModal)

console.log('************* Array for modal *******************')
const arrayForModal = Object.values(objectForModal);
console.log(arrayForModal)

console.log('************* Target an item in the array *******************')

console.log(arrayForModal[2])


///////////////////////// Functionality ///////////////////////

//////////// Modals

// grab elements: open button, modal, and close button
const $openBtn = $('#openModal');
const $modal = $('#modal');
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

//////////// Grid 

//Sets up listener for each square
const squareClicked = (event) => {
    const id = event.target.id
    console.log(id)
}
$('.question').on('click', squareClicked)

///////////////PRACTICE







})