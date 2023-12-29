let x = document.querySelector("#btn");
x.addEventListener("click", kmres);
// x.addEventListener("click", mires);

function kmres() {
  let kmInput = document.querySelector("#ip1").value;

  let mlOutput = kmInput * 0.621371;

  document.querySelector("#ip2").value = mlOutput.toFixed(3);
}

function mires() {
  let mlInput = document.querySelector("#ip2").value;

  let kmOutput = mlInput * 1.609;

  document.querySelector("#ip1").value = kmOutput.toFixed(3);
}
