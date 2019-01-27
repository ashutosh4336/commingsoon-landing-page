const countdown = document.querySelector(".countdown");

//set Lunch DAte(ms)
const lunchDate = new Date("Jan 1, 2020 13:00:00").getTime();

//Update Every Second
const intvl = setInterval(() => {
  //   console.log("Hello");
  const now = new Date().getTime();

  //Distance from now to the lunch date
  const distance = lunchDate - now;

  //Time Calculate
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Display Result
  countdown.innerHTML = `
    
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Mins</span></div>
<div>${seconds}<span>Seconds</span></div>
  
  `;
  //if lunch date passed
  if (distance < 0) {
    clearInterval(intvl);
    //Style and output
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched";
  }
}, 1000);
