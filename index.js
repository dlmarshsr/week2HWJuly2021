let position = 0;

function prevImage() {
  // slelect the slider element using getElementById and store in the
  // translate slider by the width of the image (400px)
  const slider = document.getElementById("slider2");
  if (position !== 0) {
    position += 100;
  }
  slider.style.transform = "translateX(-0%)";
}
function nextImage() {
  // slelect the slider element using getElementById and store i
  // translate slider by the width of the image (-400px)
  const slider = document.getElementById("slider2");
  if (position < -200) {
    position -= -100;
  }
  slider.style.transform = "translateX(-100%)";
  
//   if (position < -100) {
    //   position -= -200;
//   }
//   slider.style.transform = "translateX(-200%)";
}
