
const yearElement = document.querySelector("#year");
const lastModifiedElement = document.querySelector("#lastModified");

const currentDate = new Date();

const formattedDate = currentDate.toLocaleString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h24", 
});

yearElement.innerHTML = `
  <span class="highlight">
    ${currentDate.getFullYear()} &copy; Elisha Sunday ✅ Software Engineer ✅ Nigeria
  </span>`;
lastModifiedElement.innerHTML = `
  <span class="lastmodified">
    Last Modification: ${formattedDate}
  </span>`;