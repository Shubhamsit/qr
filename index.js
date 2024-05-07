let button = document.querySelector(".button");
let imgDiv = document.querySelector(".img-box");

// console.log(myimg);
let qrInput = document.querySelector(".input-box");
function qrcode() {
  imgDiv.firstElementChild.setAttribute(
    "src",
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`
  );
  let myimg = document.querySelector(".qr-img");

  console.log(imgDiv.firstElementChild);
}

button.addEventListener("click", () => {
  qrcode();
});
