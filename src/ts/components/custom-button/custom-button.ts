export default function (data: any) {
  return `
            <button 
                id="${data.id ? data.id : ""}"
                class="button custom-button"
                type="${data.type ? data.type : "button"}"
            >
                ${data.textContent}
            </button>
        `
}
