export default function(data: any){
    return(
        `
            <section class="custom-info-card">
                ${data.name ? `<p>${data.name}</p>` : ""}
                 ${data.price ? `<p>${data.price} € </p>` : ""}
            </section>
        
        `
    )
}