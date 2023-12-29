// let y = document.querySelector("#button").value;
// y.addEventListener("click", rsres);

function rsres() {
  let dlsInput = document.querySelector("#ip1").value;

  let rsOutput = dlsInput * 83.4;

  document.querySelector("#ip2").value = rsOutput.toFixed(3);
}
