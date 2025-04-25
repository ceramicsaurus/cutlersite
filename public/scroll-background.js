// public/scroll-background.js

function lerpColor(a, b, t) {
    return a.map((v, i) => Math.round(v + (b[i] - v) * t));
  }
  
  // This function makes the transition to white occur quickly after a small scroll
  function sharpTransition(percent) {
    // Fully green until 10% of the scroll, then transition to white quickly
    if (percent < 0.1) {
      return 0; // Fully green
    } else {
      return Math.min(1, (percent - 0.1) / 0.9); // Transition to white quickly after 10%
    }
  }
  
  function updateBackground() {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const percent = scrollY / maxScroll;
  
    // Apply the sharp transition logic to control the color change
    const smoothPercent = sharpTransition(percent);
  
    // Colors for gradient
    const green = [65, 121, 56];   // #417938 (green)
    const white = [255, 255, 255]; // #FFFFFF (white)
  
    // Gradual change from green to white, sharp transition after 10% of scroll
    const color1 = lerpColor(green, white, smoothPercent);
  
    // Apply the gradient (green to white transition)
    document.body.style.background = `linear-gradient(to bottom, rgb(${color1}), rgb(${white}))`;
  }
  
  window.addEventListener('scroll', updateBackground);
  window.addEventListener('load', updateBackground);
  