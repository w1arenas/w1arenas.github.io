


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
})