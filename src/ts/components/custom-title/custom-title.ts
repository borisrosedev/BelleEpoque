export default function(data: any){
    return(
        `
            <header class="custom-title ${data.className}">
                <h1 class="title">${data.textContent}</h1>
            </header>
        
        `
    )

}