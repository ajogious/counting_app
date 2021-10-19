// ------ variables -------------
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let counting = 0;
// ---- function  ----------------
upDateDisplay = () => {
   counts.innerHTML = counting;
};
btn.addEventListener('click', () => {
   counting = 0;
   upDateDisplay();
})
btn2.addEventListener('click', () => {
   counting--;
   upDateDisplay();
})
btn3.addEventListener('click', () => {
   counting++;
   upDateDisplay();
})
// ---------------Counter_App Created by Ajogious -----

