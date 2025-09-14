// Preview image upload (not part of QR code)
document.getElementById("imageUpload").onchange = function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (event) {
    document.getElementById("imagePreview").src = event.target.result;
  };
  reader.readAsDataURL(file);
};

function generateQR() {
  const content = document.getElementById("qrInput").value.trim();
  if (!content) {
    document.getElementById("qrCanvas").innerHTML =
      "Enter text, URL, or image link!";
    return;
  }

  document.getElementById("qrCanvas").innerHTML = "";

  // Local repo logo path - change if your path differs
  const logoPath = "assets/logo.png";

  const qrCode = new QRCodeStyling({
    width: 250,
    height: 250,
    type: "canvas",
    data: content,
    image: logoPath,
    dotsOptions: { color: "#2bbe60", type: "rounded" },
    backgroundOptions: { color: "#fff" },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 6,
      hideBackgroundDots: true,
      imageSize: 0.4,
    },
  });

  qrCode.append(document.getElementById("qrCanvas"));
}
