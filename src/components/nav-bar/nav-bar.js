(function() {
  const hamburgerButton = document.querySelector(".hamburger");
  const hamburgerMenu = document.querySelector(".hamburger-menu__list");
  const shadeArea = document.querySelector(".shade-area");

  hamburgerButton.addEventListener("click", hamburgerButtonAnimation);
  hamburgerButton.addEventListener("click", toggleHamburgerMenuByButton);
  hamburgerButton.addEventListener("click", toggleShade);
  document.addEventListener("click", closeHamburgerMenu);

  function hamburgerButtonAnimation() {
    return hamburgerButton.classList.toggle("is-active");
  }

  function toggleHamburgerMenuByButton() {
    return hamburgerMenu.classList.toggle("hamburger-menu__list_is-visible");
  }

  function toggleShade() {
    return shadeArea.classList.toggle("shade-area_is-active");
  }

  function closeHamburgerMenu(element) {
    const target = element.target;
    if (
      target.classList.contains("hamburger-menu__link") ||
      target.classList.contains("shade-area_is-active")
    ) {
      hamburgerButtonAnimation();
      toggleHamburgerMenuByButton();
      toggleShade();
      return;
    }
  }
})();
