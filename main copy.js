// const mapContainers = document.querySelectorAll(".map_container");
// for (let i = 0; i < mapContainers.length; i++) {
//   mapContainers[i].
// }
gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".page02",
    start: "top 30%",
    toggleActions: "restart none resume none",

    onEnter: () => {
      console.log("Trigger");
    },
  },
});

timeline.from(".page02 .map_1", {
  opacity: 0,
  duration: 2,
  y: 100,
});

gsap.from(".page02 .map_1 .text"),
  {
    opacity: 0,
    duration: 0.8,
    y: 100,
  };
