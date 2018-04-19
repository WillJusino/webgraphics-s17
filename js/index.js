$(function() {
    $(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
  });



$(document).ready(function() {
  //To switch directions up/down and left/right just place a "-" in font of the top/left attribute
  //Full Caption Sliding (Hidden to Visible)
  $('.boxgrid.captionfull').hover(function() {
    $(".cover", this).stop().animate ({
      top: '160px'
    }, {
      queue: false,
      duration: 160
    });
   },function() {
      $(".cover",this).stop().animate({
        top: '260px'
      }, {
       queue: false,
       duration: 160 
      });
    }); 
  });
 

var doughnutData = [
  
  {
    value: 929,
    color: "#E9E9E9",
    highlight: "#FF8900",
    label: "Phoenix Sightings"
  }, {
    value: 639,
    color: "#DEDEDF",
    highlight: "#FCD7AD",
    label: "Las Vegas Sightings"
  }, {
    value: 616,
    color: "#C3C2C3",
    highlight: "#96C7FF",
    label: "Seattle Sightings"
  }, {
    value: 532,
    color: "#AAAAAC",
    highlight: "#043480",
    label: "Chicago Sightings"
  }
  
];

window.onload = function() {
  var ctx = document.getElementById("chart-area").getContext("2d");
  window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
    responsive: true
  });
};


AOS.init();


$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});

// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();