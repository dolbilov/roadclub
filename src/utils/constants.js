export const footerThemeToggle = document
  .querySelector('.footer')
  .querySelector('.toggle__invisible-checkbox');

const bikesSection = document.querySelector(".bikes");
export const bikesMenu = bikesSection.querySelector(".bikes__menu");
export const bikesMenuItems= bikesMenu.querySelectorAll(".bikes__menu-item");
export const activeBikesMenuElementClass = "bikes__menu-item_active";
export const bikesCardsList = bikesSection.querySelector(".bikes__list");
export const bikesCards = bikesCardsList.querySelectorAll('li');
export const bikesCardImageSelector = ".bikes__image";
export const bikesCardNameSelector = ".bikes__name";
