/*

This app will include the foll Materialize components:

Parallax
Fixed - Nav Bar
Footer
Tool-tips
Cards
Scrollspy
*/


//Materialize Tooltip
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
  });


//Materialize Parallax

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });



//Materialize Srollspy

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
  });


