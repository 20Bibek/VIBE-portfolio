const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration:1,
    ease: Power3,
    opacity:0
})

Shery.textAnimate(".section__text p" , {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
gsap.from(".anim3", {
    y:50,
    stagger:.3,
    opacity:0,
    ease: Expo,
    duration:1
});
Shery.textAnimate(".section__text h1" , {
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
gsap.from(".anim3", {
  y:50,
  stagger:.3,
  opacity:0,
  ease: Expo,
  duration:1
});
Shery.textAnimate(".section__text__p2" , {
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
gsap.from(".anim3", {
  y:50,
  stagger:.3,
  opacity:0,
  ease: Expo,
  duration:1
});


Shery.imageEffect(".section__pic-container img", {
    style:5,
    config:{"uFrequencyX":{"value":9.16,"range":[0,100]},"uFrequencyY":{"value":3.05,"range":[0,100]},"uFrequencyZ":{"value":30.53,"range":[0,100]},"geoVertex":{"range":[1,64],"value":13.02},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500101680013993},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
});
gsap.from(".anim3", {
  y:50,
  stagger:.3,
  opacity:0,
  ease: Expo,
  duration:1
});


Shery.imageEffect(".section-pic img", {
    style:6,
    config:{"uFrequencyX":{"value":9.16,"range":[0,100]},"uFrequencyY":{"value":3.05,"range":[0,100]},"uFrequencyZ":{"value":30.53,"range":[0,100]},"geoVertex":{"range":[1,64],"value":13.02},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500101680013993},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
});



