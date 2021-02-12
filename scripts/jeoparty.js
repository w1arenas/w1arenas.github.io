
///////////////////////////// Look and feel ///////////////////////////
// ***** Classes and ID's assignments to divs ******

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

//console.log($('.question'))


$('.question').on('click', (event) => {
    // console.log(data[event.currentTarget.id])
    const $squareData = (data[event.currentTarget.id])
    console.log(event.currentTarget.id)
    const $locateAnswer = ($squareData.answer)
    // console.log($locateAnswer)
    const postAnswerToModal = $('<h3>').text($locateAnswer)
    $('#modal-textbox').append(postAnswerToModal)
    const $locateQuestion1 = ($squareData.q1)
    const $locateQuestion2 = ($squareData.q2)
    const $locateQuestion3 = ($squareData.q3)


    const $postQ1ToModal = $('<li>').text($locateQuestion1)
    const $postQ2ToModal = $('<li>').text($locateQuestion2)
    const $postQ3ToModal = $('<li>').text($locateQuestion3)

    $postQ1ToModal.on('click', (event) =>  {
        console.log("This: " + $( event.currentTarget))

        $(event.currentTarget)
        //console.log($(event.currentTarget).disable css text()[0])
        const $rightQuestion = ($squareData.rightQuestion)
        //console.log($rightQuestion)
        if ($rightQuestion === $(event.currentTarget).text()[0]) {
            keepScore($squareData.value)
            alert('Correct!')
        } else {keepScore($squareData.value * -1)
            alert('Sorry, the right answer is ' + $rightQuestion)
        }

        closeModal()
        $('#modal-textbox').empty()

    })

    $postQ2ToModal.on('click', (event) =>  {
        $(event.currentTarget)
        //console.log($(event.currentTarget).text()[0])
        const $rightQuestion = ($squareData.rightQuestion)
        //console.log($rightQuestion)
        if ($rightQuestion === $(event.currentTarget).text()[0]) {
            keepScore($squareData.value)
            alert('Correct!')
        } else {keepScore($squareData.value * -1)
            alert('Sorry, the right answer is ' + $rightQuestion)
        }
        closeModal()
        $('#modal-textbox').empty()
    })

    $postQ3ToModal.on('click', (event) =>  {
        $(event.currentTarget)
        //console.log($(event.currentTarget).text()[0])
        const $rightQuestion = ($squareData.rightQuestion)
        //console.log($rightQuestion)
        if ($rightQuestion === $(event.currentTarget).text()[0]) {
            keepScore($squareData.value)
            alert('Correct!')
        } else {keepScore($squareData.value * -1)
            alert('Sorry, the right answer is ' + $rightQuestion)
        }
        closeModal()
        $('#modal-textbox').empty()
    })

    $('#modal-textbox').append($postQ1ToModal)
    $('#modal-textbox').append($postQ2ToModal)
    $('#modal-textbox').append($postQ3ToModal)

    openModal()

 
})



    // const $divScoreboard = $('<div>').addClass('scoreboard');
    // $('body').append($divScoreboard); 

    // const $$divScoreboardText = $('<div>').addClass('score-text').text('Your Score: ' )
    // $('.scoreboard').append($divScoreboard); 
    
    // const $divScoreboardTotal = $('div').addClass('scoreTotal').text(score);
    // $('.scoreboard').append($divScoreboardTotal);   


    let score = 0

    let keepScore = (points) => {
        score += points 
        console.log("Inside score: " + score)
        $('#scoretotal').text(score)
    }
 
console.log(score)

// const $answer01 = $('<h3>').text(objectForModal01.answer)
// $('#modal-textbox01').append($answer01)

// launch correct modal




// Create div and title for score
// const $divScoreboard = $('<div>').addClass('scoreboard').text('Your Score:');
// $('body').append($divScoreboard);

// // Create div for scoreboard
// const $divScoreboard = $('<div>').addClass('scoreboard');
// $('body').append($divScoreboard);

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


const data = {
    '0.1': {answer: 'Kimberly', rightQuestion: 'c', value: 100, option1: 'a: ', q1: "a: Who is Walter's long-lost cousin?", option2: 'b: ', q2: "b: What is the name of Walter’s favorite TV actress?", option3: 'c: ', q3: "c: Who is Walter’s wife and love of his life?"},

    '0.2': {answer: '3', rightQuestion: 'b', value: 200, option1: 'a: ', q1: 'a: What is the number of suits Walter owns?', option2: 'b: ', q2: 'b: How many children does Walter have?', option3: 'c: ', q3: 'c: What is the number of times Walter has been in jail?'},

    '0.3': {answer: 'Philip, Gabriella, Luke', rightQuestion: 'b', value: 300, option1: 'a: ', q1: 'a: What are the names of the Three Stooges?', option2: 'b: ',q2: "b: What are the names of Walter's children?", option3: 'c: ', q3: 'c: What are the names of the Three Musketeers?'},

    '0.4': {answer: 'Isabella', rightQuestion: 'a', value: 400, option1: 'a: ', q1: "a: What's the name of Walter's gorgeous granddaughter?", option2: 'b: ', q2: "b: What is the name of Walter's favorite TV actress?", option3: 'c: ', q3: "c: What is the name of Walter's first girlfriend?"},
    
    '0.5': {answer: '35', question: 'c', value: 500, option1: 'a: ', option1: 'a: ', q1: 'a: How many pushups can Walter do in one minute?', option2: 'b: ', q2: 'b: How many times has Walter clean a bathroom over his lifetime?', option3: 'c: ', q3: 'c: How long has Walter been married to Kimberly?'},

    '1.1': {answer: 'The Capital of the United States.', question: 'c', value: 100, option1: 'a: ', q1: 'a: What is Mexico?', option2: 'b: ', q2: 'b: What is Canada?', option3: 'c: ', q3: 'c: What is Washington D.C.?'},

    '1.2': {answer: 'The Capital of France.', question: 'b', value: 200, option1: 'a: ', q1: 'a: What is Africa?', option2: 'b: ', q2: 'b: What is Paris?', option3: 'c: ', q3: 'c: What is Europe'},

    '1.3': {answer: 'The Capital of Spain.', question: 'b', value: 300, option1: 'a: ', q1: 'a: What is Portugal?', option2: 'b: ', q2: 'b: What is Madrid?', option3: 'c: ', q3: 'c: What is Barcelona?'},

    '1.4': {answer: 'The Capital of Peru.', question: 'a', value: 400, option1: 'a: ', q1: 'a: What is Lima?', option2: 'b: ', q2: 'b: What is Montevideo?', option3: 'c: ', q3: 'c: What is Quito?'},

    '1.5': {answer: 'The Capital of Ukraine', question: 'c', value: 500, option1: 'a: ', q1: 'a: What is Moldova?', option2: 'b: ', q2: 'b: What is Belarus?', option3: 'c: ', q3: 'c: What is Kyiv'},

    '2.1': {answer: "Harry Potter's house at Hogwarts", question: 'c', value: 100, option1: 'a: ', q1: 'a: What is Ravenclaw?', option2: 'b: ', q2: 'b: What is Hufflepuff?', option3: 'c: ', q3: 'c: What is Gryffindor?'},

    '2.2': {answer: "Harry Potter's wife.", question: 'b', value: 200, option1: 'a: ', q1: 'a: Who is Hermione Granger?', option2: 'b: ', q2: 'b: Who is Ginny Weasley?', option3: 'c: ', q3: 'c: Who is Luna Lovegood?'},

    '2.3': {answer: 'Main headmaster at Hogwarts', question: 'b', value: 300, option1: 'a: ', q1: 'a: Who is Professor Minerva McGonagall?', option2: 'b: ', q2: 'b: Who is Professor Albus Dumbledore?', option3: 'c: ', q3: 'c: Who is Professor Severus Snape?'},
}

    // const clickSquare = document.querySelector('.modal');
    // clickSquare.addEventListener('click', openModal)



// 	{id: '2.4', answer: "Hogwarts' favorite sport", question: 'a', value: 400, option1: 'a: ', q1: 'a: What is Quidditch', option2: 'b: ', q2: 'b: What is Air Cricket?', option3: 'c: ', q3: 'c: What is Vanishing Baseball?'},

// 	{id: '2.5', answer: 'Creatures that pulled the carriages at Hogwarts.', question: 'c', value: 500, option1: 'a: ', q1: 'a: What are manticores?', option2: 'b: ', q2: 'b: What are hippogriffs?', option3: 'c: ', q3: 'c: What are thestrals?'},

// 	{id: '3.1', answer: 'What CSS stands for.', question: 'c', value: 100, option1: 'a: ', q1: 'a: What is Colorful Style Sheets?', option2: 'b: ', q2: 'b: What is Computer Style Sheets?', option3: 'c: ', q3: 'c: What is Cascading Style Sheets.'},

// 	{id: '3.2', answer: 'The correct CSS syntax.', question: 'b', value: 200, option1: 'a: ', q1: 'a: {body:color=black};', option2: 'b: ', q2: 'b: body{color:black};', option3: 'c: ', q3: 'c: body:color(black);'},

// 	{id: '3.3', answer: 'Comment in a CSS file.', question: 'b', value: 300, option1: 'a: ', q1: 'a: What is //this is a comment// ?', option2: 'b: ', q2: 'b: What is /*this is a comment*/ ?', option3: 'c: ', q3: 'c: What is //this is a comment ?'},

// 	{id: '3.4', answer: 'Syntax to change text color.', question: 'a', value: 400, option1: 'a: ', q1: 'a: What is color: ?', option2: 'b: ', q2: 'b: What is font-color: ?', option3: 'c: ', q3: 'c: What is text-color: ?'},

// 	{id: '3.5', answer: 'Syntax for hyperlinks without underline.', question: 'c', value: 500, option1: 'a: ', q1: 'a: What is a{decoration:none;} ?', option2: 'b: ', q2: 'b: What is a{underline:none;} ?', option3: 'c: ', q3: 'c: What is a{text-decoration:none;} '},

// 	{id: '4.1', answer: 'Our own star.', question: 'c', value: 100, option1: 'a: ', q1: 'a: What is Charlize Theron', option2: 'b: ', q2: 'b: What is the North Star?', option3: 'c: ', q3: 'c: What is the Sun?'},

// 	{id: '4.2', answer: 'Third planet from the sun.', question: 'b', value: 200, option1: 'a: ', q1: 'a: What is Mars?', option2: 'b: ', q2: 'b: What is Earth?', option3: 'c: ', q3: 'c: What is Venus?'},

// 	{id: '4.3', answer: 'Our own galaxy.', question: 'b', value: 300, option1: 'a: ', q1: 'a: What is Triangulum?', option2: 'b: ', q2: 'b: What is the Milky Way?', option3: 'c: ', q3: 'c: What is Andromeda?'},

// 	{id: '4.4', answer: 'No longer a planet.', question: 'a', value: 400, option1: 'a: ', q1: 'a: What is Pluto?', option2: 'b: ', q2: 'b: What is the Moon?', option3: 'c: ', q3: 'c: What is Neptune?'},

//     {id: '4.5', answer: 'Closest star to the sun.', question: 'c', value: 500, option1: 'a: ', q1: "a: What is Barnard's Star?", option2: 'b: ', q2: 'b: What is Alpha Centauri A?', option3: 'c: ', q3: 'c: What is Proxima Centauri.'}
// ]







// const data = [
// 	{id: '0.1', answer: 'Kimberly', question: 'c', value: 100, option1: 'a: ', q1: "a: Who is Walter's long-lost cousin?", option2: 'b: ', q2: "b: What is the name of Walter’s favorite TV actress?", option3: 'c: ', q3: "c: Who is Walter’s wife and love of his life?"},

// 	{id: '0.2', answer: '3', question: 'b', value: 200, option1: 'a: ', q1: 'a: What is the number of suits Walter owns?', option2: 'b: ', q2: 'b: How many children does Walter have?', option3: 'c: ', q3: 'c: What is the number of times Walter has been in jail?'},

// 	{id: '0.3', answer: 'Philip, Gabriella, Luke', question: 'b', value: 300, option1: 'a: ', q1: 'a: What are the names of the Three Stooges?', option2: 'b: ', q2: "b: What are the names of Walter's children?", option3: 'c: ', q3: 'c: What are the names of the Three Musketeers?'},

// 	{id: '0.4', answer: 'Isabella', question: 'a', value: 400, option1: 'a: ', q1: "a: What's the name of Walter's gorgeous granddaughter?", option2: 'b: ', q2: "b: What is the name of Walter's favorite TV actress?", option3: 'c: ', q3: "c: What is the name of Walter's first girlfriend?"},

// 	{id: '0.5', answer: '35', question: 'c', value: 500, option1: 'a: ', q1: 'a: How many pushups can Walter do in one minute?', option2: 'b: ', q2: 'b: How many times has Walter clean a bathroom over his lifetime?', option3: 'c: ', q3: 'c: How long has Walter been married to Kimberly?'},

// 	{id: '1.1', answer: 'The Capital of the United States.', question: 'c', value: 100, option1: 'a: ', q1: 'a: What is Mexico?', option2: 'b: ', q2: 'b: What is Canada?', option3: 'c: ', q3: 'c: What is Washington D.C.?'},

// 	{id: '1.2', answer: 'The Capital of France.', question: 'b', value: 200, option1: 'a: ', q1: 'a: What is Africa?', option2: 'b: ', q2: 'b: What is Paris?', option3: 'c: ', q3: 'c: What is Europe'},

// 	{id: '1.3', answer: 'The Capital of Spain.', question: 'b', value: 300, option1: 'a: ', q1: 'a: What is Portugal?', option2: 'b: ', q2: 'b: What is Madrid?', option3: 'c: ', q3: 'c: What is Barcelona?'},

// 	{id: '1.4', answer: 'The Capital of Peru.', question: 'a', value: 400, option1: 'a: ', q1: 'a: What is Lima?', option2: 'b: ', q2: 'b: What is Montevideo?', option3: 'c: ', q3: 'c: What is Quito?'},

// 	{id: '1.5', answer: 'The Capital of Ukraine', question: 'c', value: 500, option1: 'a: ', q1: 'a: What is Moldova?', option2: 'b: ', q2: 'b: What is Belarus?', option3: 'c: ', q3: 'c: What is Kyiv'},

// 	{id: '2.1', answer: "Harry Potter's house at Hogwarts", question: 'c', value: 100, option1: 'a: ', q1: 'a: What is Ravenclaw?', option2: 'b: ', q2: 'b: What is Hufflepuff?', option3: 'c: ', q3: 'c: What is Gryffindor?'},

// 	{id: '2.2', answer: "Harry Potter's wife.", question: 'b', value: 200, option1: 'a: ', q1: 'a: Who is Hermione Granger?', option2: 'b: ', q2: 'b: Who is Ginny Weasley?', option3: 'c: ', q3: 'c: Who is Luna Lovegood?'},

// 	{id: '2.3', answer: 'Main headmaster at Hogwarts', question: 'b', value: 300, option1: 'a: ', q1: 'a: Who is Professor Minerva McGonagall?', option2: 'b: ', q2: 'b: Who is Professor Albus Dumbledore?', option3: 'c: ', q3: 'c: Who is Professor Severus Snape?'},

// 	{id: '2.4', answer: "Hogwarts' favorite sport", question: 'a', value: 400, option1: 'a: ', q1: 'a: What is Quidditch', option2: 'b: ', q2: 'b: What is Air Cricket?', option3: 'c: ', q3: 'c: What is Vanishing Baseball?'},

// 	{id: '2.5', answer: 'Creatures that pulled the carriages at Hogwarts.', question: 'c', value: 500, option1: 'a: ', q1: 'a: What are manticores?', option2: 'b: ', q2: 'b: What are hippogriffs?', option3: 'c: ', q3: 'c: What are thestrals?'},

// 	{id: '3.1', answer: 'What CSS stands for.', question: 'c', value: 100, option1: 'a: ', q1: 'a: What is Colorful Style Sheets?', option2: 'b: ', q2: 'b: What is Computer Style Sheets?', option3: 'c: ', q3: 'c: What is Cascading Style Sheets.'},

// 	{id: '3.2', answer: 'The correct CSS syntax.', question: 'b', value: 200, option1: 'a: ', q1: 'a: {body:color=black};', option2: 'b: ', q2: 'b: body{color:black};', option3: 'c: ', q3: 'c: body:color(black);'},

// 	{id: '3.3', answer: 'Comment in a CSS file.', question: 'b', value: 300, option1: 'a: ', q1: 'a: What is //this is a comment// ?', option2: 'b: ', q2: 'b: What is /*this is a comment*/ ?', option3: 'c: ', q3: 'c: What is //this is a comment ?'},

// 	{id: '3.4', answer: 'Syntax to change text color.', question: 'a', value: 400, option1: 'a: ', q1: 'a: What is color: ?', option2: 'b: ', q2: 'b: What is font-color: ?', option3: 'c: ', q3: 'c: What is text-color: ?'},

// 	{id: '3.5', answer: 'Syntax for hyperlinks without underline.', question: 'c', value: 500, option1: 'a: ', q1: 'a: What is a{decoration:none;} ?', option2: 'b: ', q2: 'b: What is a{underline:none;} ?', option3: 'c: ', q3: 'c: What is a{text-decoration:none;} '},

// 	{id: '4.1', answer: 'Our own star.', question: 'c', value: 100, option1: 'a: ', q1: 'a: What is Charlize Theron', option2: 'b: ', q2: 'b: What is the North Star?', option3: 'c: ', q3: 'c: What is the Sun?'},

// 	{id: '4.2', answer: 'Third planet from the sun.', question: 'b', value: 200, option1: 'a: ', q1: 'a: What is Mars?', option2: 'b: ', q2: 'b: What is Earth?', option3: 'c: ', q3: 'c: What is Venus?'},

// 	{id: '4.3', answer: 'Our own galaxy.', question: 'b', value: 300, option1: 'a: ', q1: 'a: What is Triangulum?', option2: 'b: ', q2: 'b: What is the Milky Way?', option3: 'c: ', q3: 'c: What is Andromeda?'},

// 	{id: '4.4', answer: 'No longer a planet.', question: 'a', value: 400, option1: 'a: ', q1: 'a: What is Pluto?', option2: 'b: ', q2: 'b: What is the Moon?', option3: 'c: ', q3: 'c: What is Neptune?'},

//     {id: '4.5', answer: 'Closest star to the sun.', question: 'c', value: 500, option1: 'a: ', q1: "a: What is Barnard's Star?", option2: 'b: ', q2: 'b: What is Alpha Centauri A?', option3: 'c: ', q3: 'c: What is Proxima Centauri.'}
// ]

///////////////////////// Functionality ///////////////////////






// const pointsArray = [0]


const $modal = $('#modal');
    
    const openModal = () => {
        $modal.css('display', 'block')
        console.log('clicked')
    }
    
    const closeModal = () => {
        $modal.css('display', 'none')
    }
    
 

    // console.log('************* Object for modal *******************')
    // const objectForModal01 = data.find(data => data.id === '0.1')

    // const $answer01 = $('<h3>').text(objectForModal01.answer)
    // $('#modal-textbox01').append($answer01)
    
    // const $liOption011 = $('<li>').text(objectForModal01.q1)
    // $('#modal-textbox01').append($liOption011)
    // const $liOption012 = $('<li>').text(objectForModal01.q2)
    // $('#modal-textbox01').append($liOption012)
    // const $liOption013 = $('<li>').text(objectForModal01.q3)
    // $('#modal-textbox01').append($liOption013)

    // const givenAnswer01 = []

    // const renderAnswer = () => {

    //     if (givenAnswer01[0] === objectForModal01.question) {
    //         //console.log('YES')
    //         alert('Correct!')
    //         pointsArray.push(objectForModal01.value)
    //         //console.log(objectForModal01.value)
    //     }else{alert('Sorry! The right answer is ' + objectForModal01.question)
    //         pointsArray.push(objectForModal01.value * -1)
    //     }
    // }

    // $('form').on('submit', (event) => {
    //     const $inputValue01 = $('#input-box01').val()
    //     givenAnswer01.push($inputValue01)
    //     event.closeModal01()
    //     event.preventDefault()
    //     $(event.currentTarget).trigger('reset')

    //     renderAnswer()

    // })



    
///////////////////// Scoreboard /////////////////////////

 

//     const sumOfScores = pointsArray.reduce(function(a, b){
//         return a + b;
//     })
//  console.log(sumOfScores)

 

})