import customFigure from "../custom-figure/custom-figure";
import customInfoCard from "../custom-info-card/custom-info-card";

export default function(data: any){
    return(
        `
            <li class="list-item">
                <section>
                    ${customFigure(data)}
                </section>
                <section>
                    ${customInfoCard(data)}      
                </section>
                <section>
                    <button class="button is-small">Ajouter au panier</button>
                </section>
            </li>

        
        `
    )
}