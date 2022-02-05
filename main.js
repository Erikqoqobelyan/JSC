 var slideIndex = 1;
 showSlides(slideIndex);
 function plusSlides(n) {
  showSlides(slideIndex += n);
}
 function currentSlide(n) {
   showSlides(slideIndex = n);
}
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
 }
function image2(x) {
    x.src=x.getAttribute('data-main');
}
function image1(x) {
    x.src=x.getAttribute('data-bg');
}

// icon1

$('i').click(function(){
    let items = [];
    if (localStorage.getItem('items').length !=0) {
        items = localStorage.getItem('items');
        items = items.split(",");
    }
    let id = $(this).attr('id');
    $(this).toggleClass("red");
    var index = items.indexOf(id);
  if (index !==-1) {
      items.splice(index, 1);
  } else {
      items.push(id);
  }
  localStorage.setItem('items', items);
});

let items = localStorage.getItem('items');
$('i').each(function functionName() {
    let id = $(this).attr('id');
    var index = items.indexOf(id);
    if (index !==-1) {
        $(this).addClass('red');
    }
});
// if (localStorage.getItem('visible') === 'true') {
//     $('#icon1').addClass('red');
// } else {
//     $('#icon1').removeClass('red');
// }

// icon2
// $('#icon2').click(function(){
//     $('#icon2').toggleClass("red");
//
//   if ($('#icon2').hasClass('red')) {
//       localStorage.setItem('visible1', true);
//   } else {
//       localStorage.setItem('visible1', false);
//   }
// });
// if (localStorage.getItem('visible1') === 'true') {
//     $('#icon2').addClass('red');
// } else {
//     $('#icon2').removeClass('red');
// }
// // icon3
// $('#icon3').click(function(){
//     $('#icon3').toggleClass("red");
//
//   if ($('#icon3').hasClass('red')) {
//       localStorage.setItem('visible3', true);
//   } else {
//       localStorage.setItem('visible3', false);
//   }
// });
// if (localStorage.getItem('visible3') === 'true') {
//     $('#icon3').addClass('red');
// } else {
//     $('#icon3').removeClass('red');
// }
// // icon4
// $('#icon4').click(function(){
//     $('#icon4').toggleClass("red");
//
//   if ($('#icon4').hasClass('red')) {
//       localStorage.setItem('visible4', true);
//   } else {
//       localStorage.setItem('visible4', false);
//   }
// });
// if (localStorage.getItem('visible4') === 'true') {
//     $('#icon4').addClass('red');
// } else {
//     $('#icon4').removeClass('red');
// }
// // icon5
// $('#icon5').click(function(){
//     $('#icon5').toggleClass("red");
//
//   if ($('#icon5').hasClass('red')) {
//       localStorage.setItem('visible5', true);
//   } else {
//       localStorage.setItem('visible5', false);
//   }
// });
// if (localStorage.getItem('visible5') === 'true') {
//     $('#icon5').addClass('red');
// } else {
//     $('#icon5').removeClass('red');
// }
// // icon6
// $('#icon6').click(function(){
//     $('#icon6').toggleClass("red");
//
//   if ($('#icon6').hasClass('red')) {
//       localStorage.setItem('visible6', true);
//   } else {
//       localStorage.setItem('visible6', false);
//   }
// });
// if (localStorage.getItem('visible6') === 'true') {
//     $('#icon6').addClass('red');
// } else {
//     $('#icon6').removeClass('red');
// }
// // icon7
// $('#icon7').click(function(){
//     $('#icon7').toggleClass("red");
//
//   if ($('#icon7').hasClass('red')) {
//       localStorage.setItem('visible7', true);
//   } else {
//       localStorage.setItem('visible7', false);
//   }
// });
// if (localStorage.getItem('visible7') === 'true') {
//     $('#icon7').addClass('red');
// } else {
//     $('#icon7').removeClass('red');
// }
// // icon8
// $('#icon8').click(function(){
//     $('#icon8').toggleClass("red");
//
//   if ($('#icon8').hasClass('red')) {
//       localStorage.setItem('visible8', true);
//   } else {
//       localStorage.setItem('visible8', false);
//   }
// });
// if (localStorage.getItem('visible8') === 'true') {
//     $('#icon8').addClass('red');
// } else {
//     $('#icon8').removeClass('red');
// }
// // icon9
// $('#icon9').click(function(){
//     $('#icon9').toggleClass("red");
//
//   if ($('#icon9').hasClass('red')) {
//       localStorage.setItem('visible9', true);
//   } else {
//       localStorage.setItem('visible9', false);
//   }
// });
// if (localStorage.getItem('visible9') === 'true') {
//     $('#icon9').addClass('red');
// } else {
//     $('#icon9').removeClass('red');
// }
//Nkar1
var modal2 = document.getElementById("myModal1");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var img0 = document.getElementById("nk1");
image01.onclick = function()
{
modal2.style.display = "block";
modalImg.src = img0.src;
}
// nkar2
var modal2 = document.getElementById("myModal1");
var img2 = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var img1 = document.getElementById("nk2");
image.onclick = function()
{
modal2.style.display = "block";
modalImg.src = img1.src;
}
// nkar3
var modal3 = document.getElementById("myModal1");
var img3 = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var img03 = document.getElementById("nk3");
image03.onclick = function()
{
modal3.style.display = "block";
modalImg.src = img03.src;
}
// nkar4
var modal2 = document.getElementById("myModal1");
var img2 = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var img04 = document.getElementById("nk4");
image04.onclick = function()
{
modal2.style.display = "block";
modalImg.src = img04.src;
}
// nkar5
var modal2 = document.getElementById("myModal1");
var img2 = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var img05 = document.getElementById("nk5");
image05.onclick = function()
{
modal2.style.display = "block";
modalImg.src = img05.src;
}
// nkar6
var modal2 = document.getElementById("myModal1");
var img2 = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var img06 = document.getElementById("nk6");
image06.onclick = function()
{
modal2.style.display = "block";
modalImg.src = img06.src;
}
// nkar7
var modal2 = document.getElementById("myModal1");
var img2 = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var img07 = document.getElementById("nk7");
image07.onclick = function()
{
modal2.style.display = "block";
modalImg.src = img07.src;
}
// nkar8
var modal2 = document.getElementById("myModal1");
var img2 = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var img08 = document.getElementById("nk8");
image08.onclick = function()
{
modal2.style.display = "block";
modalImg.src = img08.src;
}
// nkar9
var modal2 = document.getElementById("myModal1");
var img2 = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var img09 = document.getElementById("nk9");
image09.onclick = function()
{
modal2.style.display = "block";
modalImg.src = img09.src;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function()
{
  modal2.style.display = "none";
}
