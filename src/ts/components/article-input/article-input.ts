export default function (data: any) {
  return `
            <article class="article-input">
                <section class="article-input__label-and-input">
                    <label for="${data.label}"></label>
                    <input
                        id="${data.id}"
                        type="${data.type ? data.type : "text"}"
                        class="input article-input__input" placeholder="${data.placeholder}"                
                    />
                <section>
                <section id="${data.id}-error" class="error-section"><section>
            </article>
         
        `
}
