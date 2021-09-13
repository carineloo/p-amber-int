class MyHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <nav class="navbar navbar-expand-md navbar-light" id="navbar">
    <div class="container-fluid p-0">
      <a class="navbar-brand" id="logo" href="home.html"> 
        <img src="../photos/logo.png" alt="logo" width="95"  class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="mr-auto"></div>
        <!-- nav pages -->
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link hoverable active" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="values.html">Our Values</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable" href="events.html">Events</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable" href="career.html">Career</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
  }
}

customElements.define('my-nav-home', MyHome)

class MyAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <nav class="navbar navbar-expand-md navbar-light" id="navbar">
    <div class="container-fluid p-0">
      <a class="navbar-brand" id="logo" href="home.html"> 
        <img src="../photos/logo.png" alt="logo" width="95"  class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="mr-auto"></div>
        <!-- nav pages -->
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link hoverable" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable active" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="values.html">Our Values</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable" href="events.html">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="career.html">Career</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
  }
}

customElements.define('my-nav-about', MyAbout)

class MyValues extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <nav class="navbar navbar-expand-md navbar-light" id="navbar">
    <div class="container-fluid p-0">
      <a class="navbar-brand" id="logo" href="home.html"> 
        <img src="../photos/logo.png" alt="logo" width="95"  class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="mr-auto"></div>
        <!-- nav pages -->
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link hoverable" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="about.html">About</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable active" href="values.html">Our Values</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable" href="events.html">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="career.html">Career</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
  }
}

customElements.define('my-nav-values', MyValues)

class MyEvents extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <nav class="navbar navbar-expand-md navbar-light" id="navbar">
    <div class="container-fluid p-0">
      <a class="navbar-brand" id="logo" href="home.html"> 
        <img src="../photos/logo.png" alt="logo" width="95"  class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="mr-auto"></div>
        <!-- nav pages -->
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link hoverable" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="about.html">About</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable" href="values.html">Our Values</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable active" href="events.html">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="career.html">Career</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
  }
}

customElements.define('my-nav-events', MyEvents)

class MyCareer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <nav class="navbar navbar-expand-md navbar-light" id="navbar">
    <div class="container-fluid p-0">
      <a class="navbar-brand" id="logo" href="home.html"> 
        <img src="../photos/logo.png" alt="logo" width="95"  class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="mr-auto"></div>
        <!-- nav pages -->
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link hoverable" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="about.html">About</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable" href="values.html">Our Values</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable" href="events.html">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable active" href="career.html">Career</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
  }
}

customElements.define('my-nav-career', MyCareer)

class MyContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <nav class="navbar navbar-expand-md navbar-light" id="navbar">
    <div class="container-fluid p-0">
      <a class="navbar-brand" id="logo" href="home.html"> 
        <img src="../photos/logo.png" alt="logo" width="95"  class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="mr-auto"></div>
        <!-- nav pages -->
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link hoverable" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="about.html">About</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable" href="values.html">Our Values</a>
          </li>
          <li class="nav-item">
          <a class="nav-link hoverable" href="events.html">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable" href="career.html">Career</a>
          </li>
          <li class="nav-item">
            <a class="nav-link hoverable active" href=contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
  }
}

customElements.define('my-nav-contact', MyContact)