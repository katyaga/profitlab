var slider = document.querySelector(".slider");

var active_dot = document.querySelector(".slider__button--active");
var active_slide = document.querySelector(".slide--active");
var dots = document.querySelectorAll(".slider__button");
var slides = document.querySelectorAll(".slide");


var set_active_dot = function (dot) {
  if (active_dot) {
    active_dot.classList.remove("slider__button--active");
  }
  dot.classList.add("slider__button--active");
  active_dot = dot;
};

var set_active_slide_services = function (slide) {
  if (active_slide) {
    active_slide.classList.remove("slide--active");
  }
  slide.classList.add("slide--active");
  active_slide = slide;
};

var add_click_dot_handler = function (dot, slide) {
  dot.addEventListener('click', function () {
    if (dot !== "dot--active") {
      set_active_dot(dot);
      set_active_slide_services(slide);
    }
  });
};

for (var k = 0; k < slides.length; k++) {
  add_click_dot_handler(dots[k], slides[k]);
}