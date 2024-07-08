import customForm from "../../components/custom-form/custom-form"

export default function (isLoggingIn: boolean) {
  const formData = {
    formId: "log-form",
    inputs: [
      {
        type: "email",
        id: "email",
        placeholder: "Entrer votre email"
      },
      {
        type: "password",
        id: "password",
        placeholder: "Entrer votre mot de passe"
      }
    ],
    buttons: [
      {
        id: "submit-button",
        type: "submit",
        textContent: "Valider"
      },
      {
        id: "reset-button",
        type: "reset",
        textContent: "Réinitialiser"
      }
    ]
  }

  if (!isLoggingIn) {
    formData.inputs.push({
      type: "password",
      id: "confirmed-password",
      placeholder: "Confirmer le mot de passe"
    })
  }

  return `
            <main class="main log__main">
                <section>
                    ${customForm(formData)}
                    <small>${isLoggingIn ? "Pas encore inscrit(e) ? Cliquez <a href='#register'>ici</a>" : "Déjà inscrit(e) - Cliquez <a href='#login'>ici</a>"}</small>
                </section>
            </main>
        
        `
}
