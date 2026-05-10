function generateQR() {
const text = document.getElementById("qrText").value;
const qrBox = document.getElementById("qrBox");

qrBox.innerHTML = "";

if (!text) {
alert("Enter something!");
return;
}

new QRCode(qrBox, {
text: text,
width: 200,
height: 200
});
}
