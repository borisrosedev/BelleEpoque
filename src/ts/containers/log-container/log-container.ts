import { NotificationService } from "../../services/notification-service/notification-service"
import UsersService from "../../services/users-service/users-service"

export class LogContainer {
  isLoggingIn: boolean
  onNavigate: (h: string) => void
  usersService: UsersService
  notificationService: NotificationService

  constructor(isLoggingIn: boolean = true, onNavigate: (h: string) => void) {
    this.onNavigate = onNavigate
    this.usersService = new UsersService()
    this.notificationService = new NotificationService()
    this.isLoggingIn = isLoggingIn
    const form = document.getElementById("log-form")
    form.addEventListener("submit", e => this.onSubmit(e))
  }

  notifyError(name: string, value: string | undefined) {
    if (!value) {
      const errorSection = document.getElementById(`${name}-error`)
      errorSection.innerHTML = `<small> Erreur </small>`
      setTimeout(() => {
        errorSection.innerHTML = ""
      }, 3000)
      return true
    }
    return false
  }

  async onSubmit(e: Event) {
    e.preventDefault()
    const emailInputValue = (
      document.getElementById("email") as HTMLInputElement
    ).value

    const passwordInputValue = (
      document.getElementById("password") as HTMLInputElement
    ).value

    const hasEmailError = this.notifyError("email", emailInputValue)
    const hasPasswordError = this.notifyError("password", passwordInputValue)

    if (hasEmailError || hasPasswordError) {
      return
    }

    if (!this.isLoggingIn) {
      const confirmedPasswordInputValue = (
        document.getElementById("confirmed-password") as HTMLInputElement
      ).value
      const hasConfirmedPasswordError = this.notifyError(
        "confirmed-password",
        confirmedPasswordInputValue
      )

      if (hasConfirmedPasswordError) {
        return
      }
    }

    if (this.isLoggingIn) {
      const self = this

      const user = await self.usersService.getUserByEmail(emailInputValue)

      if (typeof user !== "string") {
        localStorage.setItem("token", JSON.stringify({ username: user.email }))

        if (user.password === passwordInputValue) {
          self.notificationService.content = {
            content: "Connexion réussie",
            type: "positive"
          }
          self.onNavigate("#dashboard")
        } else {
          self.notificationService.content = {
            content: "Connexion échouée",
            type: "negative"
          }
        }
      }
    } else {
      localStorage.setItem(
        "new-user",
        JSON.stringify({
          url: "https://cdn.pixabay.com/photo/2020/10/14/03/18/man-5653200_1280.jpg",
          firstname: emailInputValue.split("@")[0],
          lastname: "dupon",
          email: emailInputValue,
          password: passwordInputValue,
          wallet: 1000
        })
      )
      self.onNavigate("#dashboard")
    }
  }
}
