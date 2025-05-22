// // Index
// let count = 1;
// document.getElementById("radio1").checked = true;

// setInterval(function(){
//   nextImage();
// }, 3000)

// function nextImage(){
//   count++;
//   if(count>3){
//     count = 1;
//   }
//   document.getElementById("radio"+count).checked = true;
// }

// Script automático para o slider
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 3000);

function nextImage() {
  count++;
  if (count > 3) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}
