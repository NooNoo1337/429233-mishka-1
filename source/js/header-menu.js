'use strict';

(function () {
  if (typeof NodeList.prototype.forEach === "function") return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

function changeMenuState(menu, evt) {
  switchMenu(menu);
  var button = evt.target;
  button.classList.toggle("main-nav__button--closed");
}

function switchMenu(menu) {
  menu.forEach(function(menuItem) {
    menuItem.classList.toggle("main-nav__list--closed");
  });
}

var mainMenu = document.querySelector(".main-nav");
var menuButton = mainMenu.querySelector(".main-nav__button");
var menuLists = mainMenu.querySelectorAll(".main-nav__list");

mainMenu.classList.add("main-nav--js-opened");
switchMenu(menuLists);

menuButton.classList.add("main-nav__button--show");
menuButton.classList.add("main-nav__button--closed");
menuButton.addEventListener("click", function(evt) {
  changeMenuState(menuLists, evt);
});

