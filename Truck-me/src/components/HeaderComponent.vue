<template>
    <header>
      <nav>
        <a href="/" class="logo">
          <img src="@/assets/logo_truck_me.png" alt="logo Truck Me" />
        </a>
        <button class="hamburger"></button>
        <ul class="navbar">
          <li><a href="#">Home</a></li>
          <li><a href="/Sobre">Sobre</a></li>
          <li><a href="/Servicos">Servicos</a></li>
          <li><a href="/Contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  </template>

  <script>
  export default {
    name: 'HeaderComponent'
  };
  </script>

  <style scoped>

  header {
      background: #ffffff;
      padding-inline: 16px;
  }

  nav {
      max-width: 1280px;
      height: 70px;
      margin-inline: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .logo img {
      width: 150px;
      height: auto;
  }

  .navbar {
      display: flex;
      gap: 32px;
      list-style: none;
      padding: 0;
      margin: 0;
  }

  .navbar a {
      font-size: 15px;
      color: #000000;
      padding-block: 16px;
  }

  .hamburger {
      display: none;
      border: none;
      background: none;
      border-top: 3px solid #000000;
      cursor: pointer;
  }

  .hamburger::after,
  .hamburger::before {
      content: " ";
      display: block;
      width: 30px;
      height: 3px;
      background: #000000;
      margin-top: 5px;
      position: relative;
      transition: 0.3s;
  }

  @media (max-width: 750px) {
      .hamburger {
          display: block;
          z-index: 1;
      }
      .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: white;
          transition: 1s ease-out;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          gap: 0;
          display: none;
      }
      .navbar.show {
          display: flex;
      }
  }

  .navbar li {
      position: relative;
      margin-right: 20px;
  }

  .navbar li a {
      display: block;
      padding: 10px;
      transition: color 0.3s ease;
  }

  .navbar li::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: #fa4800;
      transition: width 0.3s ease;
  }

  .navbar li:hover::after {
      width: 100%;
  }

  .navbar li a:hover {
      color: #fa4800;
  }
  </style>
