window.addEventListener("load", function () {
  // Устанавливаем масштаб страницы на 90%
  document.body.style.zoom = "99%";

  // Возвращаем масштаб на 100% через 100 миллисекунд
  setTimeout(function () {
    document.body.style.zoom = "100%";
  }, 100);
});
