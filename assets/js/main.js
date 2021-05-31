/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav__menu"),
  navToggle = document.querySelector("#nav__toggle"),
  navClose = document.querySelector("#nav__close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((el) => el.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelector(".skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

// function toggleSkills() {
//   let itemClass = this.parentNode.className;
//   console.log(itemClass);
//   for (let i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].className = "skills__content skills__close";
//   }
//   if (itemClass === "skills__content skills__close") {
//     this.parentNode.className = "skills__content skills__open";
//   } else if (itemClass === "skills__content skills__open") {
//     this.parentNode.className = "skills__content skills__close";
//   }
// }

// skillsHeader.forEach((el) => {
//   el.addEventListener("click", toggleSkills);
// });

skillsHeader.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();

    let a = e.currentTarget.parentElement.classList;
    console.log(a);
    if (a.contains("skills__open")) {
      e.currentTarget.parentElement.className = "skills__content skills__close";
    } else if (!a.contains("skills__open")) {
      e.currentTarget.parentElement.className = "skills__content skills__open";
    }
  });
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtn = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

// let modal = (modalClick) => {
//   modalViews[modalClick].classList.add("active-modal");
// };

modalBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modalViews[i].classList.add("active-modal");
  });
});

modalClose.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modalViews[i].classList.remove("active-modal");
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
