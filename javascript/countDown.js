// Sett datoen som en teller ned fra
const countDownDate = new Date("Nov 13, 2020 17:00:00").getTime();
const countDates = document.querySelector("#countDates");
const countStart = document.querySelector("#countStart");

// Oppdater telleren hvert sekund
let x = setInterval(function() {

  // Dagens dato
  let now = new Date().getTime();
    
  // Finner forkjellenen mellom datoen en teller ned fra og dagens dato
  let distance = countDownDate - now;
    
  // Tids kalkulasjon for dager, timer, minutter og sekunder
  let dager = Math.floor(distance / (1000 * 60 * 60 * 24));
  let timer = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutter = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let sekunder = Math.floor((distance % (1000 * 60)) / 1000);
    
  // outputer til div elementet Countdown
  document.querySelector("#countDown").innerHTML = `
    <h1 class="yellow shadow">${dager}</h1> 
    <h1 class="yellow shadow">:</h1> 
    <h1 class="yellow shadow">${timer}</h1> 
    <h1 class="yellow shadow">:</h1>
    <h1 class="yellow shadow">${minutter}</h1> 
    <h1 class="yellow shadow">:</h1>
    <h1 class="yellow shadow">${sekunder}</h1>
    `;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#countDown").innerHTML = '<h1 class="yellow shadow">IS OUT!</h1>';
    countDown.style.display = "block";
    countDates.style.display = "none";
    countStart.style.display = "none";
  }
}, 1000);
