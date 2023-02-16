// Set initial count
let count = 0;


// select value and buttons
const value = document.querySelector("#value");
const btn = document.querySelectorAll("");

btns.forEach(function (btn) {
btn.addEventListener("click", function (e) {
 const styles = e.currentTarget.classList;
 if(styles.contains("decrease")){
  count--;
 } else if (styles.contains("increase")) {
  count++;
 } else {
  count = 0
 }
 value.textContent = count;
});
});