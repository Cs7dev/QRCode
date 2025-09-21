let qrCodeInstance = null;

function isValidInput(input) {
  const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*$/;
  return input.length > 0 && (urlPattern.test(input) || input.length >= 3);
}

function generateQR() {
  const inputValue = document.getElementById("qrInput").value.trim();
  const canvasContainer = document.getElementById("qrCanvas");
  const validationMessage = document.getElementById("validationMessage");
  const footer = document.getElementById("footer");

  canvasContainer.innerHTML = "";
  canvasContainer.classList.add("hidden");
  validationMessage.innerHTML = "";
  if (footer) footer.classList.add("hidden");

  if (!isValidInput(inputValue)) {
    validationMessage.innerHTML = "⚠️ Invalid input. Please enter a valid URL or at least 3 characters.";
    return;
  }

  qrCodeInstance = new QRCodeStyling({
    width: 250,
    height: 250,
    type: "canvas",
    data: inputValue,
    image: "assets/logo.png",
    dotsOptions: {
      color: "#03136f",
      type: "rounded"
    },
    backgroundOptions: {
      color: "#fff"
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 10,
      hideBackgroundDots: true,
      imageSize: 0.5
    }
  });

  qrCodeInstance.append(canvasContainer);
  canvasContainer.classList.remove("hidden");
  validationMessage.innerHTML = "✅ QR code generated successfully!";
  if (footer) footer.classList.remove("hidden");
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
