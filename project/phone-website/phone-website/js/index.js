/*
=============
Navigation
=============
*/
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const scrollLink = document.querySelectorAll(".scroll-link");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.classList.add("active");
  navContainer.style.left = "0";
  navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("active");
  navContainer.style.left = "-30rem";
  navContainer.style.width = "0";
});

/*
=============
PopUp with localStorage
=============
*/
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide__popup");
    localStorage.setItem("popupClosed", "true"); // Save to localStorage
  });

  window.addEventListener("load", () => {
    const popupPreviouslyClosed = localStorage.getItem("popupClosed");

    if (!popupPreviouslyClosed) {
      setTimeout(() => {
        popup.classList.remove("hide__popup");
      }, 500);
    } else {
      popup.classList.add("hide__popup"); // Ensure it's hidden if already dismissed
    }
  });
}

/*
=============
Fixed Navigation
=============
*/
const navBar = document.querySelector(".navigation");
const gotoTop = document.querySelector(".goto-top");

// Smooth Scroll
Array.from(scrollLink).map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix__nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    navContainer.style.left = "-30rem";
    document.body.classList.remove("active");
  });
});

// Fix NavBar
window.addEventListener("scroll", e => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }

  if (scrollHeight > 300) {
    gotoTop.classList.add("show-top");
  } else {
    gotoTop.classList.remove("show-top");
  }
});

/*
=============
Login / Cart / Search Toggles
=============
*/
let login = document.querySelector('.login-form');
let shoppingCart = document.querySelector('.shopping-cart');
let searchForm = document.querySelector('.search-form');

document.querySelector('#login-btn').onclick = () => {
  login.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  login.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  login.classList.remove('active');
}
