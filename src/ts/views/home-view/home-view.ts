import customTitle from "../../components/custom-title/custom-title"

export default function () {
  const data = {
    className: "custom-title--h1",
    textContent: "Page | Accueil"
  }

  return `
            <main class="main home__main">
                ${customTitle(data)}
                <section class="section">     
                    <button 
                    id="home-menu-button"
                    type="text" class="button">Nos produits</button>
                </section>
            </main>
        
        `
}
