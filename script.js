function generateQR() {
  const input = document.getElementById("qrInput").value.trim();
  const qrImage = document.getElementById("qrImage");
  if (input === "") {
    qrImage.src = "";
    qrImage.alt = "Enter some text to generate a QR code.";
    return;
  }
  // Using QR Code API
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(input)}`;
  qrImage.alt = "QR code for: " + input;
}
