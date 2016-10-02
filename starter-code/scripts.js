console.log('javascript connected!')
var count1 = 0;
var count2 = 0;
var stepSize = 50;
var inWidth = window.innerWidth;

// 1. Get two divs to move on different key presses;
  $(function(){
    $(document).keydown(function(e){
     switch (e.which){
       case 39:    //lright arrow key
          count2++;
          var maxLeft = $('.rabbit').position().left;
        if ($('.box2').position().left < maxLeft) {
          var diff = maxLeft - $('.box2').position().left;
          $('.box2').stop(false, true).animate({
           left: '+=' + (diff < stepSize ? diff : stepSize)
         });
        }
        break;
      case 90:    //z key
        count1++;
        var maxLeft = $('.rabbit').position().left;
        if ($('.box1').position().left < maxLeft) {
          var diff = maxLeft - $('.box1').position().left;
          $('.box1').stop(false, true).animate({
           left: '+=' + (diff < stepSize ? diff : stepSize)
          });
        }
        break;
      }
  });
});

// 2. Get one div to move on button click;
$(function(){
$( '#start' ).click(function() {
  $('.intro').hide( "slow" );
    alert('Chug that Duff!');
      var rabbit = $(".rabbit");
      rabbit.animate({left: '900px'}, 'slow');
  });
});
//centering or rearranging divs break this button
// $(function(){
//   $( '#start' ).click(function() {
//     alert('Chug that Duff!')
//     $('.rabbit').animate({
//         left:'+=500'
//       });
//     });
// });
//  $(document).load (function() {
//     $("#start").click(function(){
//         alert("button");
//     });
// });
//
// var button = document.querySelector("#start");
//  button.addEventListener("click", function() {
//    console.log("Button clicked.");
//   });
//
// $('#start').click(function(){
//   ($'.rabbit').animate({
//     left: '+=500'
//     });
// });
// tried all these and no worky.

// 3. Get them all to stop at edge of screen responsive
// how?

// 4 create a 'win state' first div to hit end wins and alerts player.

// $(function(){
// $(document).keydown(function() {
//     if
//       (((count1*50)+150) > inWidth)
//         alert('Homer Wins!');
//    else if
//       (((count2*50)+150) > inWidth)
//       alert('Barney Wins!');
// });
// }); this sort of works in a hackey way.
$(function(){
 $(document).keydown(function() {
   if
    ($('.box1').position().left >= $('.rabbit').position().left) {
      alert('Homer Wins!')
    }
      else if
    ($('.box2').position().left >= $('.rabbit').position().left) {
      alert('Barney Wins!')
    }
 });
});

// 5. 'start page' with start button slides up after click and starts rabbit
// incorporated into alert

