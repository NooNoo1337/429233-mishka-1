
(function () {
  var sizeSelectButton = document.querySelectorAll("[class*='show-size']");
  var sizeSelectOverlay = null, sizeSelectModal = null;

  sizeSelectOverlay = document.querySelector(".size-select");
  sizeSelectModal = sizeSelectOverlay.querySelector(".size-select__container");

  sizeSelectButton.forEach(function(button) {
    button.addEventListener("click", function(evt) {
      evt.preventDefault();
      sizeSelectOverlay.classList.add("size-select--show");
    });
  });

  sizeSelectModal.addEventListener("click", function(evt) {
    evt.stopPropagation();
  });

  sizeSelectOverlay.addEventListener("click", function() {
  sizeSelectOverlay.classList.remove("size-select--show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && sizeSelectOverlay.classList.contains("size-select--show")) {
      sizeSelectOverlay.classList.remove("size-select--show");
    }
  });
})();


