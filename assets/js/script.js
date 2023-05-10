const infoText = document.getElementById("contact-text")

function copyText() {
  navigator.clipboard.writeText("pratishlmc@gmail.com")
  infoText.innerHTML = "E-mail copied!"
  setTimeout(() => {
    infoText.innerHTML = `<svg
    xmlns = "http://www.w3.org/2000/svg"
    width = "10"
    height = "10"
    fill = "#000"
    class="bi bi-arrow-90deg-up"
    viewBox = "0 0 16 16"
      >
      <path
        fill-rule="evenodd"
        d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
      />
    								</svg >
      Click to copy`
  }, 2000);

}