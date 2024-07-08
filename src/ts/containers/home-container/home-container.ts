import { NotificationService } from "../../services/notification-service/notification-service"

type onNavigateType = (h: string) => void

export class HomeContainer {
  onNavigate: onNavigateType
  notificationService: NotificationService

  constructor(onNavigate: onNavigateType) {
    this.onNavigate = onNavigate
    const homeMenuButton = document.getElementById("home-menu-button")
    homeMenuButton.addEventListener("click", () => this.onClick())
    this.notificationService = new NotificationService()
    this.notificationService.content = {
      content: "Page d'accueil",
      type: "info"
    }
  }

  onClick() {
    this.onNavigate("#menu")
  }
}
