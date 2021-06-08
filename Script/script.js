var count = 0;


function reset() {
window.location.reload()
}

function add() {
  count ++;
  document.getElementById("count").innerHTML = count;
}
