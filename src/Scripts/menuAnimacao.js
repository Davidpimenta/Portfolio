const btn = document.getElementById("btn-menu");
btn.addEventListener("click", () => {
  btn.classList.toggle("ativar");
  const ul = document.querySelector(".menu-ul");
  const li = document.querySelectorAll(".opt");

  ul.classList.toggle("menu-ul-act");
  li.forEach(li => {
      li.classList.toggle('opt-animacao')
  });
});
