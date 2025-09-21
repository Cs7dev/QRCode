let qrCodeInstance = null;

function generateQR() {
  const inputValue = document.getElementById("qrInput").value.trim();
  const canvasContainer = document.getElementById("qrCanvas");

  if (!inputValue) {
    canvasContainer.innerHTML = "Please enter valid text, URL, or image link!";
    return;
  }

  canvasContainer.innerHTML = "";

  const logoPath = "assets/logo.png"; 

  qrCodeInstance = new QRCodeStyling({
    width: 250,
    height: 250,
    type: "canvas",
    data: inputValue,
    image: logoPath,
    dotsOptions: {
      color: "#03136fff",
      type: "rounded"
    },
    backgroundOptions: {
      color: "#fff"
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 6,
      hideBackgroundDots: true,
      imageSize: 0.4
    }
  });

  qrCodeInstance.append(canvasContainer);
}

function downloadQR() {
  if (!qrCodeInstance) {
    alert("Please generate a QR code first.");
    return;
  }

  qrCodeInstance.download({ name: "my-qr-code", extension: "png" });
}