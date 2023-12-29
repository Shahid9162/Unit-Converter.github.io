function pdsres() {
  let kgInput = document.querySelector("#ip1").value;
  let pdOutput = kgInput * 2.20462;

  document.querySelector("#ip2").value = pdOutput.toFixed(3);
}
