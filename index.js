
const question1 = document.querySelector('#question-1')
const question2 = document.querySelector('#question-2')
const question3 = document.querySelector('#question-3')
const question4 = document.querySelector('#question-4')
const question5 = document.querySelector('#question-5')

const text1 = document.querySelector('#text-1')
const text2 = document.querySelector('#text-2')
const text3 = document.querySelector('#text-3')
const text4 = document.querySelector('#text-4')
const text5 = document.querySelector('#text-5')

const image1 = document.querySelector('#image-1')
const image2 = document.querySelector('#image-2')
const image3 = document.querySelector('#image-3')
const image4 = document.querySelector('#image-4')
const image5 = document.querySelector('#image-5')

const answer1 = document.querySelector('#answer-1')
const answer2 = document.querySelector('#answer-2')
const answer3 = document.querySelector('#answer-3')
const answer4 = document.querySelector('#answer-4')
const answer5 = document.querySelector('#answer-5')



question1.addEventListener('click', ()=> {
    answer1.classList.toggle("show");
    text1.classList.toggle("desaturated-blue");
    question1.classList.toggle("margin-b-0");
    image1.classList.toggle("rotate");

    answer2.classList.remove("show");
    text2.classList.remove("desaturated-blue");
    question2.classList.remove("margin-b-0");
    image2.classList.remove("rotate");

    answer3.classList.remove("show");
    text3.classList.remove("desaturated-blue");
    question3.classList.remove("margin-b-0");
    image3.classList.remove("rotate");

    answer4.classList.remove("show");
    text4.classList.remove("desaturated-blue");
    question4.classList.remove("margin-b-0");
    image4.classList.remove("rotate");

    answer5.classList.remove("show");
    text5.classList.remove("desaturated-blue");
    question5.classList.remove("margin-b-0");
    image5.classList.remove("rotate");
});

question2.addEventListener('click', ()=> {
    answer2.classList.toggle("show");
    text2.classList.toggle("desaturated-blue");
    question2.classList.toggle("margin-b-0");
    image2.classList.toggle("rotate");

    answer1.classList.remove("show");
    text1.classList.remove("desaturated-blue");
    question1.classList.remove("margin-b-0");
    image1.classList.remove("rotate");

    answer3.classList.remove("show");
    text3.classList.remove("desaturated-blue");
    question3.classList.remove("margin-b-0");
    image3.classList.remove("rotate");

    answer4.classList.remove("show");
    text4.classList.remove("desaturated-blue");
    question4.classList.remove("margin-b-0");
    image4.classList.remove("rotate");

    answer5.classList.remove("show");
    text5.classList.remove("desaturated-blue");
    question5.classList.remove("margin-b-0");
    image5.classList.remove("rotate");
});

question3.addEventListener('click', ()=> {
    answer3.classList.toggle("show");
    text3.classList.toggle("desaturated-blue");
    question3.classList.toggle("margin-b-0");
    image3.classList.toggle("rotate");

    answer2.classList.remove("show");
    text2.classList.remove("desaturated-blue");
    question2.classList.remove("margin-b-0");
    image2.classList.remove("rotate");

    answer1.classList.remove("show");
    text1.classList.remove("desaturated-blue");
    question1.classList.remove("margin-b-0");
    image1.classList.remove("rotate");

    answer4.classList.remove("show");
    text4.classList.remove("desaturated-blue");
    question4.classList.remove("margin-b-0");
    image4.classList.remove("rotate");

    answer5.classList.remove("show");
    text5.classList.remove("desaturated-blue");
    question5.classList.remove("margin-b-0");
    image5.classList.remove("rotate");
});

question4.addEventListener('click', ()=> {
    answer4.classList.toggle("show");
    text4.classList.toggle("desaturated-blue");
    question4.classList.toggle("margin-b-0");
    image4.classList.toggle("rotate");

    answer2.classList.remove("show");
    text2.classList.remove("desaturated-blue");
    question2.classList.remove("margin-b-0");
    image2.classList.remove("rotate");

    answer3.classList.remove("show");
    text3.classList.remove("desaturated-blue");
    question3.classList.remove("margin-b-0");
    image3.classList.remove("rotate");

    answer1.classList.remove("show");
    text1.classList.remove("desaturated-blue");
    question1.classList.remove("margin-b-0");
    image1.classList.remove("rotate");

    answer5.classList.remove("show");
    text5.classList.remove("desaturated-blue");
    question5.classList.remove("margin-b-0");
    image5.classList.remove("rotate");
});

question5.addEventListener('click', ()=> {
    answer5.classList.toggle("show");
    text5.classList.toggle("desaturated-blue");
    question5.classList.toggle("margin-b-0");
    image5.classList.toggle("rotate");

    answer2.classList.remove("show");
    text2.classList.remove("desaturated-blue");
    question2.classList.remove("margin-b-0");
    image2.classList.remove("rotate");

    answer3.classList.remove("show");
    text3.classList.remove("desaturated-blue");
    question3.classList.remove("margin-b-0");
    image3.classList.remove("rotate");

    answer4.classList.remove("show");
    text4.classList.remove("desaturated-blue");
    question4.classList.remove("margin-b-0");
    image4.classList.remove("rotate");

    answer1.classList.remove("show");
    text1.classList.remove("desaturated-blue");
    question1.classList.remove("margin-b-0");
    image1.classList.remove("rotate");
});
