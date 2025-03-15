// Select the footer elements
const copyrightYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Get the current year dynamically,
const today = new Date();
copyrightYear.textContent = today.getFullYear();

// Get the last modified date of the document
lastModified.textContent = `Last modified: ${document.lastModified}`;
