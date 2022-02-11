gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 1,
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".map_1",
    start: "top 50%",
    end: "bottom bottom",
    scrub: 0.5,
    markers: true,
    pin: true,
    pinSpacing: false,
    snap: 1 / 3,
  },
});

timeline
  .to(".page01", {
    opacity: 0.2,
  })
  .from(
    ".map_1",
    {
      opacity: 0.3,
    },
    "<"
  );

// ScrollTrigger.create({
//   trigger: ".map_1",
//   start: "top top",
//   pin: true,
//   pinSpacing: false,
// });

// ScrollTrigger.create({
//   snap: 1 / 4,
// });
// const mapContainers = document.querySelectorAll(".map_container");

// window.addEventListener("scroll", () => {
//   let map;

//   for (let i = 0; i < mapContainers.length; i++) {
//     map = mapContainers[i];
//     boundingRect = map.getBoundingClientRect();

//     if (
//       boundingRect.top > window.innerHeight * 0.1 &&
//       boundingRect.top < window.innerHeight * 0.8
//     ) {
//       map.classList.add("visible");
//     }
//   }
// });
