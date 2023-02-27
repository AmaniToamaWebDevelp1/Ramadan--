

let days = document.getElementById('d');
let hours = document.getElementById('h');
let min = document.getElementById('m');
let sec = document.getElementById('s');
let endDate = '03/20/2023 00:00:00';
let audio = document.getElementsByTagName('audio');
/** Date format mm/dd/yyyy */

let x = setInterval(
    function(){
        let now = new Date(endDate).getTime();
        let countDown = new Date().getTime();
        let distance = now - countDown;
        /**time calculation for days, hrs, mins,sec */
    
        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 *60 *60));
        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 *60)) ;
        let s = Math.floor((distance % (1000 * 60 )) / (1000));
       days.innerText = d ;
       hours.innerText = h;
       min.innerText = m ;
       sec.innerText = s ;
    }
);
var fanoos = document.querySelector(".fanoos");
console.log(fanoos);
// gsap.fromTo( fanoos,{ x: -40, fill: 'blue',  },  { x: 40, fill: 'green' });

// gsap.to(fanoos, {
//     // this is the vars object
//     // it contains properties to animate
//     x: 0,
//     y: 0,
//     rotation: -30,
//     // and special properties
//     duration: 2
//   }).timeline({repeat: 2})
//   var tl = gsap.timeline({repeat: 2});

// gsap.to(fanoos, {rotation : -45, repeat : 44, duration : 3})
// Create a timeline for the animation
var tl = gsap.timeline({ repeat: -1, yoyo: true });

// Define the rotation angle and duration of the swing
var angle = 10;
var duration = 1;

// Add the swing animation to the timeline
tl.to('.fanoos', {
  duration: duration / 2,
  rotate: angle,
  transformOrigin: 'bottom center',
  ease: 'power1.inOut',
})
.to('.fanoos', {
  duration: duration,
  rotate: -angle,
  transformOrigin: 'bottom center',
  ease: 'power1.inOut',
})
.to('.fanoos', {
  duration: duration / 2,
  rotate: 0,
  transformOrigin: 'bottom center',
  ease: 'power1.inOut',
});


