const infoText = document.getElementById("contact-text")
const projectsContainer = document.getElementById("projects-container")

let projects = [
  {
    title: "MacAlistair Vlogs",
    picture: "../projects/macalistairvlogs.png",
    link: "https://macalistair-vlogs.vercel.app/"
  },
  {
    title: "Notes Application",
    picture: "../projects/notesapp.png",
    link: "https://macalistair-vlogs.vercel.app/"
  },
  {
    title: "Dictionary",
    picture: "../projects/dictionary.png",
    link: "https://cab-dictionary.vercel.app/"
  },
  {
    title: "Book Store",
    picture: "../projects/Hotpot.png",
    link: "https://macalistair-vlogs.vercel.app/"
  },

]
console.log(projects.length)

for (let i = 0; i < projects.length; i++) {
  let project = `
          <div>
						<img
						id="project-image"
						alt="${projects[i].title}"
							src="${projects[i].picture}"
						/>
						<p class="project-title">${projects[i].title}.</p>
						<a
            style="font-weight: bold;"
							class="project-portal"
							target="_blank"
							rel="noreferrer"
							href="${projects[i].link}"
						>
							Visit
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-box-arrow-in-up-right"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
								/>
								<path
									fill-rule="evenodd"
									d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
								/>
							</svg>
						</a>
					</div>`
  projectsContainer.insertAdjacentHTML("beforeend", project)
}


function copyText() {
  navigator.clipboard.writeText("pratishlmc@gmail.com")
  infoText.innerHTML = `<span><b>E-mail copied!</b></span>`
  setTimeout(() => {
    infoText.innerHTML = `<svg
    xmlns = "http://www.w3.org/2000/svg"
    width = "10"
    height = "10"
    fill = "currentColor"
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

