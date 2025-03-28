function criarCabecalho() {
  return `
    <header>
      <a href="/index.html" class="logo" id="menu-logo">M</a>
      <nav class="menu">
        <ul class="menu-list">
          <li class="menu-list-item"><a href="/pages/aula01.html">Aula 01</a></li>
          <li class="menu-list-item"><a href="/pages/aula02.html">Aula 02</a></li>
          <li class="menu-list-item"><a href="/pages/aula03.html">Aula 03</a></li>
          <li class="menu-list-item"><a href="/pages/aula04.html">Aula 04</a></li>
          <li class="menu-list-item"><a href="/pages/aula05.html">Aula 05</a></li>
        </ul>
      </nav>

      <div class="modal" id="modal"></div>

      <div class="menu-mobile" id="menu-mobile">
        <nav class="mobile-nav">
          <ul class="menu-list">
          <li class="menu-list-item"><a href="/pages/aula01.html">Aula 01</a></li>
          <li class="menu-list-item"><a href="/pages/aula02.html">Aula 02</a></li>
          <li class="menu-list-item"><a href="/pages/aula03.html">Aula 03</a></li>
          <li class="menu-list-item"><a href="/pages/aula04.html">Aula 04</a></li>
          <li class="menu-list-item"><a href="/pages/aula05.html">Aula 05</a></li>
          </ul>
          <span id="close-menu">&times;</span>
        </nav>
      </div>
    </header>
  `;
}

function inserirCabecalho() {
  const cabecalhoHTML = criarCabecalho();
  document.body.insertAdjacentHTML('afterbegin', cabecalhoHTML);
}

inserirCabecalho();

const menuLogo = document.getElementById('menu-logo');
const modal = document.getElementById("modal");
const menuMobile = document.getElementById("menu-mobile");
const closeMenu = document.getElementById("close-menu");
const menuList = document.querySelectorAll(".menu .menu-list .menu-list-item a");


menuList.forEach((menu) => {
  document.title === menu.innerText ? 
    menu.classList.add('active') :
    menu.classList.remove('active');
})


const handleMenuLogoClick = (e) => {
  e.preventDefault();
  modal.classList.toggle('active');
  menuMobile.classList.toggle('menu-mobile-active');
};

const handleCloseMenuClick = () => {
  modal.classList.toggle('active');
  menuMobile.classList.toggle('menu-mobile-active');
}

const updateMenuLogoBehavior = () => {
  if (window.innerWidth < 680) {
    menuLogo.removeEventListener("click", updateMenuLogoBehavior);
    menuLogo.addEventListener("click", handleMenuLogoClick);
  } else {
    menuLogo.removeEventListener("click", handleMenuLogoClick);
    menuLogo.attributes.href.value = '/index.html';
  }
  modal.classList.remove('active');
  menuMobile.classList.remove('menu-mobile-active');
};

window.addEventListener("load", () => {
  console.log("carregou janela: " + window.innerWidth);
  updateMenuLogoBehavior();
});

window.addEventListener("resize", () => {
  updateMenuLogoBehavior();

});

modal.addEventListener("click", () => {
  modal.classList.toggle("active");
});

closeMenu.addEventListener("click", handleCloseMenuClick);