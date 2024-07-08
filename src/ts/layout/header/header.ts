const navBar = (): string => {
    return `
              <nav>
                  <a href=""
                      <span aria-label="icone de la page d'accueil">
                        <i class="fa-solid fa-house"></i>
                      </span>
                      <span>
                        Accueil
                      </span>
                  </a>
                  <a href="#login">
                      <span aria-label="icone de la page de connexion">
                        <i class="fa-solid fa-right-to-bracket"></i>
                     <span>
                     <span>
                        Connexion
                     </span>
                  </a>
              </nav>
          
          `
  }
  
  export default function (): string {
    return `
              <header class="header header--app">
                  <a 
                      class="home-link"
                      href="" 
                      data-testid="home-anchor" 
                  >
                      <figure>
                          <img src="/assets/chef.jpg" alt="logo de Belle Epoque" />
                      </figure>
                      <span>
                        Belle Epoque
                      </span>
                  </a>
                  ${navBar()}
              </header>
          
          `
  }
  