// Select DOM elements
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

// Toggle the menu visibility
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  // Show/hide the menu
  if (menu.classList.contains("active")) {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.listStyleType = "none";
    menu.style.fontSize = "24px";
    menu.style.justifyContent = "center";
    menu.style.alignItems = "center";
    subNavkeysm.style.margin = "220px"; 
  } else {
    menu.style.display = "none";
  }
});
