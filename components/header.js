class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
        <header>
            <h1 id="title"> Lily Ophelia </h1>
            <h3> <i> pronouns: she/her </i></h3>
            <h4> "sometimes things are bad, but that's ok, because dogs still exist - alex"</h4>
            <nav>
                <a href="index.html">home</a>
            </nav>
            <hr>
        </header>
      `;
    }
  }

  class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
        <footer>
            <hr>
            <nav>
                <a href="https://youtube.com/@lilymackenzie" target="_blank">youtube</a> |
                <a href="https://github.com/LilyTheThink" target="_blank">github</a>
            </nav>
        <footer>
      `;
    }
  }
  
  
  customElements.define('header-component', Header);
  customElements.define('footer-component', Footer);