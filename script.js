// Quiz answers
const answers = {
  1: 'me',
  2: '2020',
  3: 'me',
  4: 'blue',
  5: 'nextMonth',
  6: 'achal',
  7: 'she',
  8: 'achal',
  9: 'me',
  10: 'both' // both are best friends ;)
};

function checkAnswer(button, correct) {
  const qNum = button.parentElement.previousElementSibling
    ? button.parentElement.previousElementSibling.innerText[0]
    : null;

  if (button.innerText.toLowerCase() === answers[qNum]?.toLowerCase() ||
      button.value === answers[qNum]) {
    button.style.background = 'green';
  } else {
    button.style.background = 'red';
  }
}

// Confetti
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 0.5,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 10
  });
}

function drawConfetti() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.ellipse(c.x, c.y, c.r, c.r/2, c.tilt, 0, Math.PI*2);
    ctx.fill();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += 2 + c.d;
    c.x += Math.sin(c.tilt);
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawConfetti, 20);
// Countdown Timer
function startCountdown() {
  // Example: set date for next month
  const meetDate = new Date();
  meetDate.setMonth(meetDate.getMonth() + 1);  

  function updateTimer() {
    const now = new Date().getTime();
    const distance = meetDate - now;

    if (distance < 0) {
      document.getElementById("timer").innerHTML = "🎉 It's Time to Meet! 🎉";
      clearInterval(x);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }

  const x = setInterval(updateTimer, 1000);
}

startCountdown();
