function inres() {
  let cmInput = document.querySelector("#ip1").value;
  let inOutput = cmInput * 0.393701;

  document.querySelector("#ip2").value = inOutput.toFixed(3);
}
