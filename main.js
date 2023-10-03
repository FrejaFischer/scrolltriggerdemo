gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  gsap.to(".ball-1", {
    x: 500,
    scrollTrigger: {
      trigger: ".ball-1",
      start: "top 50%",
      // markers: true,
    },
  });

  gsap.from(".ball-2", {
    x: 300,
    scale: 2,
    duration: 10,
    scrollTrigger: {
      trigger: ".ball-2",
      start: "top 50%",
      end: "bottom 50%",
      // markers: true,
      toggleActions: "play pause resume reverse",
    },
  });

  gsap.from(".ball-3", {
    x: 300,
    stagger: 0.1, //seconds delay
    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
      start: "top center", //Where the animation start (see markers)
      end: "+=700px", //Where the animation need to end
      trigger: ".ball-3", //Who is the trigger of the scroll?
      scrub: true,
      pin: document.querySelector(".ball-3").parentElement, //Makes the section of the animation sticky until finish
      start: "top center",
      // end: "+=200px", //Helps visualise
    },
  });

  ScrollTrigger.create({
    trigger: ".ball-4",
    start: "top 50%",
    toggleClass: "active",
    once: true,
    markers: true,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".ball-5",
      start: "top 50%",
      end: "+-600px",
      scrub: "true",
      pin: document.querySelector(".ball-5").parentElement,
    },
  });
  tl.to(".ball-5", { x: 500 }).to(".ball-5", { y: 100 }).to(".ball-5", { scale: 3 });
});
