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
                <a href="posts.html">posts</a>
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
            <div id="badges">
              <img src="badges/bu12.gif" alt="this website is gay"/>
              <a href="https://dictionary.cambridge.org/dictionary/english/gullible">
                <img src="badges/clickhere_red.gif" />
              </a>
              <img src="badges/froggygif.gif" alt="little froggy"/>
              <img src="badges/hello_kitty.gif" alt="hello kitty"/>
              <img src="badges/minecraft.gif" alt="minecraft"/>
              <img src="badges/spotify.gif" alt="spotify"/>
              <img src="badges/transnow2.gif" alt="trans rights!"/>
              <a href="https://www.twitter.com">
                <img src="badges/twitterbutton.gif" alt="twitter"/>
              </a>
              <img src="badges/tf.gif" alt="music for the gays"/>

              <img src="badges/tyg.gif" alt="trans your gender"/>
              
              <img id="phonechump" src="badges/phonechump.gif" alt="phone chump"/>

            </div>
        <footer>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  customElements.define('footer-component', Footer);