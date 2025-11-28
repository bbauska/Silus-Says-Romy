/* /js/scripts.js in github Silus-Counter-2 making silus-counter-2.bauska.org */
/* Nov 29, 2025 = xx,### (xx hours approx)
*/
let counter = 0;
/* xx,xxx Nov 28, 2025
  all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
