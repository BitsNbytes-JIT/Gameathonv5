document.querySelectorAll(".image-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".pop-image").style.display = "block";
    document.querySelector(".pop-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".pop-image span").onclick = () => {
  document.querySelector(".pop-image").style.display = "none";
};

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
