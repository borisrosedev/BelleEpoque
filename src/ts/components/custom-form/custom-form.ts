import articleInput from "../article-input/article-input"
import customButton from "../custom-button/custom-button"

export default function (data: any) {
  return `
            <form 
                id="${data.formId}"
                class="form custom-form ${data.formClassName ? data.formClassName : ""}"
            >
                <section class="form__article-inputs">
                    ${data.inputs.map((el: any) => articleInput(el)).join("")}
                </section>
                <section class="form__buttons">
                    ${data.buttons.map((el: any) => customButton(el)).join("")}
                </section>
            <form>
        
        `
}
