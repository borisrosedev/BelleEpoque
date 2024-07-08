import customFigure from "../../components/custom-figure/custom-figure"
import { NotificationService } from "../../services/notification-service/notification-service"
import UsersService from "../../services/users-service/users-service"

export default class DashboardContainer {
  token: any
  usersService: UsersService
  notificationService: NotificationService
  onNavigate: (h: string) => void
  newUser: any

  constructor(onNavigate: (h: string) => void) {
    this.onNavigate = onNavigate
    this.token = JSON.parse(localStorage.getItem("token"))
    this.usersService = new UsersService()
    this.notificationService = new NotificationService()

    const logoutButton = document.getElementById("logout-button")

    logoutButton.addEventListener("click", () => {
      this.notificationService.content = {
        content: "Déconnexion en cours",
        type: "info"
      }

      localStorage.removeItem("token")
      if (localStorage.getItem("new-user")) {
        localStorage.removeItem("new-user")
      }
      setTimeout(() => {
        this.onNavigate("")
      }, 3000)
    })

    if (this.token && this.token.username) {
      this.usersService.getUserByEmail(this.token.username).then(user => {
        const self = this
        if (typeof user !== "string") {
          this.fillUserData(user)
        } else {
          this.notificationService.content = {
            content: "Erreur",
            type: "negative"
          }
          setTimeout(() => {
            self.onNavigate("")
          }, 2000)
        }
      })
    } else if (localStorage.getItem("new-user")) {
      this.newUser = JSON.parse(localStorage.getItem("new-user"))

      this.fillUserData(this.newUser)
    } else {
      this.notificationService.content = { content: "Erreur", type: "negative" }
      setTimeout(() => {
        self.onNavigate("")
      }, 2000)
    }
  }

  fillUserData(user: any) {
    const userUrlContainer = document.getElementById("user-url")
    userUrlContainer.innerHTML += customFigure({
      url: user.url,
      name: user.firstname + " " + user.lastname
    })

    const userFirstnameLastname = document.getElementById(
      "user-firstname-and-lastname"
    )

    userFirstnameLastname.innerHTML =
      "<p>" + user.firstname + " " + user.lastname + "</p>"

    const userWallet = document.getElementById("user-wallet")
    userWallet.innerHTML = `<span aria-label="montant de votre portefeuille en ligne">${user.wallet} $</span>`
  }
}
