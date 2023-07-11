const letters = document.querySelectorAll(".fill");
// /*pink, yellow, orange, skin, teal*/
// const palette = ['#EAC435', '#1E96FC', '#FF6F59', '#D90368','#A246DD']

// // 

// for (const letter of letters){
//   let parts = letter.querySelectorAll(".fill");
//   letter.addEventListener("mouseenter", function(){
//       // loop through the parts
//      // letter.style.borderRadius = "80%";
//         // set the "transform" style to random translation and rotation within a range
//           letter.style.transform = `translateY(${Math.random()*300 - 150}%) translateX(${Math.random()*300 - 150}%) rotate(${Math.random()*800 - 250}deg)`;
//         // pick a random color for their background
//         letter.style.background = palette[Math.floor(Math.random()*palette.length)];
//       });

//   }

document.addEventListener("mousedown", function(){
  for (const letter of letters){
    // clear the "style" attribute that we added earlier
    letter.style.borderRadius = "80%";
     letter.style.background = '#A246DD';
   
    // letter.removeAttribute("style");
  }
});

document.addEventListener("mouseup", function(){
  for (const letter of letters){
    // clear the "style" attribute that we added earlier
    letter.removeAttribute("style");
  }
});