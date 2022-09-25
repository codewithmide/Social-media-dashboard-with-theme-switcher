const checkbox = document.querySelector("input[type='checkbox']");
const body = document.querySelector(".body");
const heading_text = document.querySelector(".light-heading-h1");
const overview = document.querySelector(".light-heading-header");
const card_color = document.querySelector(".light");
const card_color_one = document.querySelector(".light-one");
const card_color_two = document.querySelector(".light-two");
const card_color_three = document.querySelector(".light-three");
const card_color_four = document.querySelector(".light-four");
const card_color_five = document.querySelector(".light-five");
const card_color_six = document.querySelector(".light-six");
const card_color_seven = document.querySelector(".light-seven");
const card_color_eight = document.querySelector(".light-eight");
const card_color_nine = document.querySelector(".light-nine");
const card_color_ten = document.querySelector(".light-ten");
const card_color_eleven = document.querySelector(".light-eleven");
const card_color_twelve = document.querySelector(".light-twelve");
const box_heading = document.querySelector(".light-head");
const box_heading_two = document.querySelector(".light-head-two");
const box_heading_three = document.querySelector(".light-head-three");
const box_heading_four = document.querySelector(".light-head-four");
const box_heading_five = document.querySelector(".light-head-five");
const box_heading_six = document.querySelector(".light-head-six");
const box_heading_seven = document.querySelector(".light-head-seven");
const box_heading_eight = document.querySelector(".light-head-eight");
const box_heading_nine = document.querySelector(".light-head-nine");
const box_heading_ten = document.querySelector(".light-head-ten");
const box_heading_eleven = document.querySelector(".light-head-eleven");
const box_heading_twelve = document.querySelector(".light-head-twelve");


checkbox.addEventListener("click", () => {
    body.classList.toggle("bg-light");
    heading_text.classList.toggle("light-heading");
    overview.classList.toggle('light-heading');
    card_color.classList.toggle("card-light");
    card_color_one.classList.toggle("card-light");
    card_color_two.classList.toggle("card-light");
    card_color_three.classList.toggle("card-light");
    box_heading.classList.toggle('light-box-heading');
    box_heading_two.classList.toggle('light-box-heading');
    box_heading_three.classList.toggle('light-box-heading');
    box_heading_four.classList.toggle('light-box-heading');
    box_heading_five.classList.toggle("light-box-bottom");
    box_heading_six.classList.toggle("light-box-bottom");
    box_heading_seven.classList.toggle("light-box-bottom");
    box_heading_eight.classList.toggle("light-box-bottom");
    box_heading_nine.classList.toggle("light-box-bottom");
    box_heading_ten.classList.toggle("light-box-bottom");
    box_heading_eleven.classList.toggle("light-box-bottom");
    box_heading_twelve.classList.toggle("light-box-bottom");
});

checkbox.addEventListener('click', () => {
    card_color_four.classList.toggle("card-light");
    card_color_five.classList.toggle("card-light");
    card_color_six.classList.toggle("card-light");
    card_color_seven.classList.toggle("card-light");
    card_color_eight.classList.toggle("card-light");
});

checkbox.addEventListener('click', () => {
    card_color_nine.classList.toggle("card-light");
    card_color_ten.classList.toggle("card-light");
    card_color_eleven.classList.toggle("card-light");
    card_color_twelve.classList.toggle("card-light");
});
