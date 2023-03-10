const txt = document.getElementById("inputxt");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

function clipBrd() {
  //select text
  txt.select();

  //copy to clipboard
  navigator.clipboard.writeText(txt.value);

  //Alert
  alert(`Text copied to clipboard ${txt.value}`);
}
