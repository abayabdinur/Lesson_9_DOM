// // На клик по кнопке
// menuBtn.addEventListener("click", () => {
//   // у nav переключаем класс
//   document.querySelector("nav").classList.toggle("open");
// });

const menuBtns = document.querySelectorAll(".menu-btn");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Находим ID, хранящийся в атрибуте data-target
    let targetId = btn.getAttribute("data-target"); // acc-section
    // Выделяем селектором по ID
    let target = document.getElementById(targetId);
    // Находим отступ элемента от верха страницы
    let targetOffset = target.offsetTop;
    console.log(targetOffset, "offset");
    // Прокручиваем страницу
    window.scrollTo(0, targetOffset);
  });
});





const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("window");
  menuBtn.classList.toggle("menuX");
  menuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector("nav").classList.remove("window");
      menuBtn.classList.remove("menuX");
    });
  });
})
