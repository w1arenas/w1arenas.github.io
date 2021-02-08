


$(() => {

// create container
const $divContainer = $('<div>').addClass('container');
$('body').append($divContainer);

// create div for category

for (let i = 0; i < 5; i++) {
    const $divSubject = $('<div>').addClass('subject' + i);
    $($divContainer).append($divSubject)
}

// create divs for questions
for (let i = 0; i < 5; i++) {
    const $divQuestion = $('<div>').addClass('question').attr('id', 'question0.' + i);
    $('.subject0').append($divQuestion)
}

for (let i = 0; i < 5; i++) {
    const $divQuestion = $('<div>').addClass('question').attr('id', 'question1.' + i);
    $('.subject1').append($divQuestion)
}

for (let i = 0; i < 5; i++) {
    const $divQuestion = $('<div>').addClass('question').attr('id', 'question2.' + i);
    $('.subject2').append($divQuestion)
}    

for (let i = 0; i < 5; i++) {
    const $divQuestion = $('<div>').addClass('question').attr('id', 'question3.' + i);
    $('.subject3').append($divQuestion)
}

for (let i = 0; i < 5; i++) {
    const $divQuestion = $('<div>').addClass('question').attr('id', 'question4.' + i);
    $('.subject4').append($divQuestion)
}    


// for (let i = 0; i < 6; i++) {
//     const $divSubject = $('<div>').addClass('subject').attr('id', 'subject' + [i]);
//     $($divCategories).append($divSubject)
// 




})