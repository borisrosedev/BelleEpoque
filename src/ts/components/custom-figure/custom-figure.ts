export default function (data: any) {
  return `
            <figure class="custom-figure">
                <img 
                    src="${data.url}" alt="${data.name}" 
                />  
            </figure>
        
        `
}
