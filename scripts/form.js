const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const productSelect = document.getElementById("product");

  products.forEach(product => {
      let option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const ratingStars = document.querySelectorAll(".rating input");

  ratingStars.forEach(star => {
      star.addEventListener("change", function () {
          const value = this.value;
          document.querySelectorAll(".rating label").forEach(label => {
              label.style.color = label.htmlFor <= "star" + value ? "gold" : "#ccc";
          });
      });
  });
});

// Update Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;