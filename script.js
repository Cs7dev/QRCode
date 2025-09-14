// Image upload (preview only)
document.getElementById('imageUpload').onchange = function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(event) {
    document.getElementById('imagePreview').src = event.target.result;
  };
  reader.readAsDataURL(file);
};

// Logo upload (for QR code background)
let logoDataURL = "";
document.getElementById('logoUpload').onchange = function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(event) {
    logoDataURL = event.target.result;
    document.getElementById('logoPreview').src = logoDataURL;
  };
  reader.readAsDataURL(file);
};

// Initialize QRCodeStyling
let qrCode = null;
function generateQR() {
  const content = document.getElementById('qrInput').value.trim();
  if (!content) {
    document.getElementById('qrCanvas').innerHTML = 'Enter some text, URL, or image link!';
    return;
  }

  // Remove previous QRCode if any
  document.getElementById('qrCanvas').innerHTML = '';

  qrCode = new QRCodeStyling({
    width: 250,
    height: 250,
    type: "canvas",
    data: content,
    image: logoDataURL || "",
    dotsOptions: { color: "#2bbe60", type: "rounded" },
    backgroundOptions: {
      color: "#fff"
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 6, // Margin between QR and logo
      hideBackgroundDots: true, // hide dots under logo for nice effect
      imageSize: 0.4 // Scale logo: 40% of QR code area
    }
  });

  qrCode.append(document.getElementById("qrCanvas"));
}
