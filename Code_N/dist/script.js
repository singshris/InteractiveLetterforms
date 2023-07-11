const letters = document.querySelectorAll(".strip");
/*pink, yellow, orange, skin, teal*/
const palette = ['#D085FF', '#C05CFF', '#9273E8', '#6B40E0'];

// 

for (const letter of letters){
  let parts = letter.querySelectorAll(".strip");
  letter.addEventListener("mouseenter", function(){
      // loop through the parts
     // letter.style.borderRadius = "80%";
        // set the "transform" style to random translation and rotation within a range
          letter.style.transform = `rotate(-900deg)`;
        // pick a random color for their background
        letter.style.background = palette[Math.floor(Math.random()*palette.length)];
      });

  }

document.addEventListener("mousedown", function(){
  for (const letter of letters){
    // clear the "style" attribute that we added earlier
    letter.removeAttribute("style");
  }
});