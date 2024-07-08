import customButton from "../../components/custom-button/custom-button"
import customFigure from "../../components/custom-figure/custom-figure"

export default function () {
  return `
            <main class="main dashboard__main">

                <section id="user-data" class="dashboard__user-data">

                    <section id="user-url">
                    </section>

                    <section id="user-firstname-and-lastname">
                    </section>

                    <section id="user-wallet"></section>
                </section>
                <section>
                    ${customButton({ textContent: "Déconnexion", id: "logout-button" })}
                </section>
            
            
            </main>
        
        `
}
