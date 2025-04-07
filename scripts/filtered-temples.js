// Toggle navigation menu visibility
document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');

  this.innerHTML = menu.classList.contains('active') ? '&#10005;' : '&#9776;';
});

// Update Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056.jpg"
  },
  {
    templeName: "Lisbon Portugal Temple",
    location: "Lisbon, Portugal",
    dedicated: "2019, September, 15",
    area: 23730,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6318.jpg"
  },
  {
    templeName: "Durban South Africa Temple",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936.jpg"
  },
  {
    templeName: "Oquirrah Mountain Utah Temple",
    location: "Oquirrah, Utah",
    dedicated: "2009, August, 21-23",
    area: 60000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-4032-thumb.jpg"
  },
  {
    templeName: "Copenhagen Denmark Temple",
    location: "Copenhagen, Denmark",
    dedicated: "2004, May, 23",
    area: 25000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-6193-thumb.jpg"
  },
];


// Utility to clear gallery
function clearTemples() {
  document.querySelector(".gallery").innerHTML = '';
}

// Resize logic: insert 400x250 if missing
function resizeImage(url) {
  if (url.includes("400x")) return url; // Already resized
  if (url.includes("temples/photo-galleries")) {
    return url.replace(/(temples\/[^\/]+\/)/, "$1400x250/");
  }
  return url; // External source: use as is
}

// Create cards
function createTempleCard(filteredTemples) {
  clearTemples();

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area} sq ft</p>
      <img src="${resizeImage(temple.imageUrl)}" alt="${temple.templeName} Temple" loading="lazy">
    `;
    document.querySelector(".gallery").appendChild(card);
  });
}

// Initial display
createTempleCard(temples);

// Navigation filter
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = e.target.getAttribute("data-filter");
    let filtered = [];

    switch (filter) {
      case "old":
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        break;
      case "new":
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        break;
      case "large":
        filtered = temples.filter(t => t.area > 90000);
        break;
      case "small":
        filtered = temples.filter(t => t.area < 10000);
        break;
      default: // Includes "home"
        filtered = temples;
        break;
    }

    createTempleCard(filtered);
  });
});
