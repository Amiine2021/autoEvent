let txt = document.getElementById('txt');
let myBtn = document.getElementById('myBtn');

// onload = function(){
//     txt.focus();
//     myBtn.click();
//     txt.value = "welcome"
// }

myBtn.onclick = function(){
    this.style.color = 'red';
    txt.value = "welcome"
}