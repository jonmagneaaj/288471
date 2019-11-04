/*Sjekker om det er noen elementer synlig på nettsiden, 60 ganger i sekundet.*/ 

const scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

const elementsToShow = document.querySelectorAll('.show-on-scroll');

/*Sjekker etter elementer som har .visScroll i seg og legger de inn i en array.*/ 
function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        /*element.classList.remove('is-visible');*/
      }
    });
  
    scroll(loop);
  }
  loop();

/*Hentet fra nettet. Sjekker etter hva som er i ViewPort*/ 
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    const rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

/*const leftGrid = document.querySelector("#left-grid");

const slideLeftSettings = {
    duration: 3000,
    iterations: 1
}

const slideLeftKeyFrames =[
    {transform: "opacity: 0.0", left:"padding-left: -55rem"},
    {transform: "opacity: 1", left:"padding-left: 0rem"}
]

const slideLeft = leftGrid.animate(slideLeftKeyFrames, slideLeftSettings);

document.onclick = () =>{
    slideLeft.playbackRate = 1;
}
*/