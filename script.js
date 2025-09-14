function generateQR() {
  const content = document.getElementById("qrInput").value.trim();
  if (!content) {
    document.getElementById("qrCanvas").innerHTML = "Enter text, URL, or image link!";
    return;
  }

  document.getElementById("qrCanvas").innerHTML = "";

  const logoPath = "assets/logo.png"; // Path to your local logo file

  const qrCode = new QRCodeStyling({
    width: 250,
    height: 250,
    type: "canvas",
    data: content,
    image: logoPath,
    dotsOptions: { color: "#03136fff", type: "rounded" },
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
