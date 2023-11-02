


function WithoutLocomotiveScrolling(){
    let stars = document.querySelector('#stars');
let moon = document.querySelector('#moon');
let mountains_behind = document.querySelector('#mountains_behind');
let text = document.querySelector('#moonText');
let mountains_front = document.querySelector('#mountains_front');
let value =  window.scrollY;
window.addEventListener('scroll',function(){
    let value =  window.scrollY;
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.05+ 'px'
    mountains_behind.style.top = value * 0.5+ 'px'
    mountains_front.style.top = value * 0+ 'px'
    text.style.marginRight = value * 3 + 'px'

})
}
WithoutLocomotiveScrolling();



function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#loco"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#loco" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#loco", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#loco").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
// loco();
var tl = gsap.timeline();
tl
.to(stars,{
    scrollTrigger:{
        trigger:stars,
        scroller:"#loco",
        start:"bottom 100%",
        scrub:2 

    },
    left:"20%",
})
.to(moon,{
    scrollTrigger:{
        trigger:moon,
        scroller:"#loco",
        start:"bottom 100%",
        scrub:true 

    },
    top:"55%"

})
.to(mountains_behind,{
    scrollTrigger:{
        trigger:mountains_behind,
        scroller:"#loco",
        start:"bottom 100%",
        scrub:1 

    },
    left:"3%",
    top:"15%",
})
.to(mountains_front,{
    scrollTrigger:{
        trigger:mountains_front,
        scroller:"#loco",
        start:"bottom 100%",
        scrub:2 

    },
    top:"5%",
})
.to(text,{
    scrollTrigger:{
        trigger:"#paralex",
        scroller:"#loco",
        start:"bottom 100%",
        scrub:5 

    },
    top:"85%",
    right:"80%",
})

function textAnim1() {

    tl.from("#page1 h1", {
        opacity: 0,
        y: "30px",
        z: "-50px",
        rotateX: "-92deg",
        skewX: "-5deg",
        skewY: "-10deg",
        ease: Expo.ease,
        duration: 0.9
    })
    tl.from("#page1 p", {
        opacity: 0,
        y: 10
    }, "-=1")
}
textAnim1();

function allTextAnim() {
    document.querySelectorAll(".section h1").forEach(function (elem) {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 90%"
            },
            opacity: 0,
            y: "50px",
            z: "-90px",
            rotateX: "-90deg",
            skewX: "40deg",
            skewY: "-8deg",
            ease: Circ.ease,
            duration: 1
        })
    })

    gsap.from("#we", {
        scrollTrigger: {
            trigger: "#we",
            start: "top 80%",
            scrub: 1
        },
        x: 100
    })
    gsap.from("#help", {
        scrollTrigger: {
            trigger: "#we",
            start: "top 80%",
            scrub: 1
        },
        x: -100
    })
    gsap.from("#stand", {
        scrollTrigger: {
            trigger: "#we",
            start: "top 80%",
            scrub: 1
        },
        x: 150
    })
}
allTextAnim();



function menuToggle(){
    const menus = document.querySelectorAll(".menu-toggle");
        menus.forEach(function (menu) {
            const hambergerMenu = menu.querySelector(".hamberger-menu");
            menu.addEventListener("click", function () {
                hambergerMenu.classList.toggle("open");
            });
        });
        
  }
  menuToggle();
  function menuReveal(){
    var menuToggle = document.querySelector("#menuToggle");
  var tl = gsap.timeline({paused: true});
  tl
  .to('.fullpage-menu',{
    duration:0,
    display:"block",
    ease:"Expo.eseInOut",
  });
  
  tl
  .from('.menu-bg span',{
    duration:1,
    x:"100%",
    stagger:0.1,
    ease:'Expo.easeInOut'
  });
  tl
  .from('.main-menu li a',{
    duration:1.5,
    y:"100%",
    stagger:0.2,
    ease:'Expo.easeInOut'
  },"-=0.5");
  
  
  tl.from('.social-links li',{
    duration:1,
    y:"-100%",
    opacity:0,
    stagger:0.1,
    ease:'Expo.easeInOut'
  },"-=0.5");
  tl.reverse();
  
  menuToggle.addEventListener('click',function(){
    tl.reversed(!tl.reversed());
  
  })
  }
  menuReveal();
  
  tl
.to("#scroll-line2",{
    scrollTrigger:{
        trigger:"#scroll-line2",
        // scroller:"#main",
        start:"top 100%",
        scrub:1,
        // markers:true
    },
    x:-200,
})
.to("#scroll-line3",{
    scrollTrigger:{
        trigger:"#scroll-line3",
        // scroller:"#main",
        start:"top 100%",
        scrub:1,
        // markers:true
    },
    x:200,
    // ease:"elastic"
})
