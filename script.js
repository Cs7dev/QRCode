let qrCodeInstance = null;

function isValidInput(input) {
  const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*$/;
  return input.length > 0 && (urlPattern.test(input) || input.length >= 3);
}

function generateQR() {
  const inputValue = document.getElementById("qrInput").value.trim();
  const canvasContainer = document.getElementById("qrCanvas");

  if (!isValidInput(inputValue)) {
    canvasContainer.innerHTML = "⚠️ Enter a valid URL or text (min 3 characters)";
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

function livePreview() {
  const inputValue = document.getElementById("qrInput").value.trim();
  if (isValidInput(inputValue)) {
    generateQR();
  }
}

function downloadQR() {
  if (!qrCodeInstance) {
    alert("⚠️ Generate a QR code before downloading.");
    return;
  }
  qrCodeInstance.download({ name: "my-qr-code", extension: "png" });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}