let btn1 = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let code = document.querySelector(".code");
let cpy = document.getElementById("copy");
let rgb1 = "#3028d8";
let rgb2 = "#920e78";
let colorgen = () => {
  let keycodes = "0123456789abcdef";
  let hexcode = "#";
  for (let i = 0; i < 6; i++) {
    hexcode = hexcode + keycodes[Math.floor(Math.random() * 16)];
  }
  return hexcode;
};
const btn1fn = () => {
  rgb1 = colorgen();
  btn1.style.backgroundColor = `${rgb1}`;
  btn1.innerText = `${rgb1}`;
  code.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2} );`;
  let style =
    (code.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2} );`);
  document.body.style = style;
};
const btn2fn = () => {
  rgb2 = colorgen();
  btn2.style.backgroundColor = `${rgb2}`;
  btn2.innerText = `${rgb2}`;
  let style =
    (code.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2} );`);
  document.body.style = style;
};
code.addEventListener("click", () => {
  navigator.clipboard.writeText(code.innerHTML);
  cpy.innerText = "Text Copied";
});
document.body.addEventListener("mouseover", () => {
  cpy.innerText = "";
});

btn1.addEventListener("click", btn1fn);

btn2.addEventListener("click", btn2fn);
