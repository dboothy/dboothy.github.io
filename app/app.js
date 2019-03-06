/*

This app will include the foll Materialize components:

Parallax
Fixed - Nav Bar
Footer
Tool-tips
Cards
Scrollspy
*/

//jquery Materialize initialization

$(document).ready(function() {
    $('.tooltipped').tooltip();
    $(".collapsible div").mouseover(function() { $(this).trigger('click'); });
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();



});

  document.addEventListener('DOMContentLoaded', function() {


    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  
      
  });

  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.tooltipped');
  //   var instances = M.Tooltip.init(elems);
  // });

//Materialize Tooltip pure JS

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.tooltipped');
//   var instances = M.Tooltip.init(elems);
// });


//Materialize Parallax pure JS

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.parallax');
//   var instances = M.Parallax.init(elems);
// });



//Materialize Srollspy pure JS

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.scrollspy');
//   var instances = M.ScrollSpy.init(elems);
// });