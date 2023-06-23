const letters = document.querySelectorAll(".empty");
/*pink, yellow, orange, skin, teal*/
const palette = ['#EAC435', '#1E96FC','#D90368','#00BFB2', '#FF6F59']

// 

for (const letter of letters){
  let parts = letter.querySelectorAll(".empty");
  letter.addEventListener("mousedown", function(){

        // pick a random color for their background
        letter.style.background = palette[Math.floor(Math.random()*palette.length)];
      });

}

document.addEventListener("keydown", function(){
  for (const letter of letters){
    // clear the "style" attribute that we added earlier
    letter.removeAttribute("style");
  }
});