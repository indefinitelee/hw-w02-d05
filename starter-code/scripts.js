console.log('javascript connected!')
var count1 = 0;
var count2 = 0;
// 1. Get two divs to move on different key presses;
  $(function(){
    $(document).keydown(function(e){
     switch (e.which){
       case 39:    //lright arrow key
          count2++;
        $('.box2').animate({
           left: '+=50'
         });
        break;
      case 90:    //z key
        count1++;
        $('.box1').animate({
            left: '+=50'
            });
        break;
      }
  });
});

// 2. Get one div to move on button click;
$(function(){
$( '#start' ).click(function() {
  alert('Chug that Duff!');
   var rabbit = $(".rabbit");
   rabbit.animate({left: '+=90%'}, 'slow');
  });
});

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
// @media only screen and (max-device-width: 800px) {

// #header {display:none;}

// }

// 3. Get them all to stop at edge of screen responsive


// 4 create a 'win state' first div to hit end wins and alerts player.
//get X coordinate of rabbit
//compare to X coordinate of box1 and box2 on keydown if === break winner else break??
//or actually, count clicks whichever reaches backgroudn width/50 first wins
var winPos = $('div').innerWidth();
  console.log(winPos);

// 5. 'start page' with start button slides up after click and starts rabbit
// $( "p" ).click(function() {
//   $( this ).slideUp();
// });


// z 90
// right arrow 39
// onload media query to ge widtch of screen set as variable
