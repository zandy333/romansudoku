window.onload=function() {

  let container = document.getElementById("container");
  let menubtn = document.getElementById("menubtn");
  let content = document.getElementById("content");
  let w = window.innerWidth;
  let h = window.innerHeight;

  
  // define a function that sets min-height of my-element to window.innerHeight:

const setHeight = () => {
    document.getElementById("container").style.minHeight = window.innerHeight + "px"
};

// define mobile screen size:

let deviceWidth = window.matchMedia("(max-width: 100vw)");

if (deviceWidth.matches) {
// set an event listener that detects when innerHeight changes:

    window.addEventListener("resize", setHeight);

// call the function once to set initial height:

    setHeight();
}



function scrollX() {
    let posX = 0;
    let speed = 0.1; // Pixels per frame
    let direction = -1; // 1 for right, -1 for left
    //const maxScroll = -h/w*50; // Define how far it should go before reversing
    const maxScroll = -h+w; // Define how far it should go before reversing
    
    function animate() {
        // Update position
        posX += speed * direction;

        if (posX <= maxScroll || posX >= 0) {
            direction *= -1;
            //direction *= 1;     
        }
    // Apply the position to the background
    container.style.backgroundPosition = `${posX}px 0px`;
    requestAnimationFrame(animate);
    }
    animate();
}
  
  /*function scrollX() {
        let offset = 0;
        const speed = 2; // Pixels per frame

        function animate() {
          offset -= speed;
          // Use modulo or a reset if the background isn't set to 'repeat'
          container.style.backgroundRepeat = `repeat-X`;
          container.style.backgroundPosition = `${offset}px 0`;
          
          requestAnimationFrame(animate);
        }

        animate();
  }*/

    function scrollY() {
    let posY = 0;
    let speed = 0.1; // Pixels per frame
    let direction = -1; // 1 for right, -1 for left
    //const maxScroll = -w/h*50; // Define how far it should go before reversing
    const maxScroll = -w+h; // Define how far it should go before reversing
    
    function animate() {
        // Update position
        posY += speed * direction;

        if (posY <= maxScroll || posY >= 0) {
            direction *= -1;
            //direction *= 1;     
        }
    // Apply the position to the background
        container.style.backgroundPosition = `0px ${posY}px`;
        requestAnimationFrame(animate);
        }
        animate();
    }
  /*
  function scrollY() {
        let offset = 0;
        const speed = 2; // Pixels per frame

        function animate() {
          offset -= speed;
          // Use modulo or a reset if the background isn't set to 'repeat'
          container.style.backgroundRepeat = `repeat-Y`;
          container.style.backgroundPosition = `0 ${offset}px`;
          
          requestAnimationFrame(animate);
        }

        animate();
  }*/
  
  // Check for portrait orientation
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  if (isPortrait) {
      console.log("Device is in portrait mode at initial load.");
      // Perform actions specific to portrait mode
      
      scrollX();
      

  } else {
      console.log("Device is in landscape mode at initial load.");
      // Perform actions specific to landscape mode
      
      scrollY();
  }

  // Listen for orientation changes
  window.matchMedia("(orientation: portrait)").addEventListener("change", (e) => {
    
    w = window.innerWidth;
    h = window.innerHeight;

    if (e.matches) {

      scrollX();
    } else {

      scrollY();
    } 
    
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer); // Clear any existing timer
    resizeTimer = setTimeout(() => {
      // This code will execute only after 200ms of no further resize events
      console.log("Window resize completed!");
      // Place your resize-dependent logic here
      // For example, update layout, recalculate positions, etc.
      w = window.innerWidth;
      h = window.innerHeight;

      if ((w < h)) {
      
      //displayPortrait();
      scrollX();
          
      } else {
      
      //displayLandscape();
      scrollY();
      
        }
    }, 200);
});
  
// Listen for viewport resize
/*let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer); // Clear any existing timer
    resizeTimer = setTimeout(() => {
      // This code will execute only after 200ms of no further resize events
      console.log("Window resize completed!");
      // Place your resize-dependent logic here
      // For example, update layout, recalculate positions, etc.
      w = window.innerWidth;
      h = window.innerHeight;

      if ((w < h)) {
      
      displayPortrait();
      updateCellSizePortrait();
      setCellBorders();
      //setPadlockPortrait(); 
          
      } else {
      
      displayLandscape();
      updateCellSizeLandscape();
      setCellBorders();
      //setPadlockLandscape();
      
    }
  }, 0); // Adjust the debounce delay (in milliseconds) as needed
});*/

}
