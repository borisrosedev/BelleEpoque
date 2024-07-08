import DashboardContainer from "./src/ts/containers/dashboard-container/dashboard-container"
import { HomeContainer } from "./src/ts/containers/home-container/home-container"
import { LogContainer } from "./src/ts/containers/log-container/log-container"
import { MenuContainer } from "./src/ts/containers/menu-container/menu-container"
import header from "./src/ts/layout/header/header"
import notification from "./src/ts/layout/notification/notification"
import dashboardView from "./src/ts/views/dashboard-view/dashboard-view"
import homeView from "./src/ts/views/home-view/home-view"
import logView from "./src/ts/views/log-view/log-view"
import menuView from "./src/ts/views/menu-view/menu-view"

declare global {
  interface Window {
    onNavigate: (h: string) => void
  }
}

window.onNavigate = (h: string) => {
  navigateToView(h)
}

window.onpopstate = () => {
  navigateToView(window.location.hash)
}

export const navigateToView = (h: string): void => {
  window.history.pushState({}, "", window.location.pathname + h)

  const app = document.getElementById("app")
  app.innerHTML = ""
  app.innerHTML += header()
  app.innerHTML += notification()
  switch (h) {
    case "":
      app.innerHTML += homeView()
      new HomeContainer(window.onNavigate)
      break
    case "#menu":
      app.innerHTML += menuView()
      new MenuContainer(window.onNavigate)
      break
    case "#login":
      app.innerHTML += logView(true)
      new LogContainer(true, window.onNavigate)
      break
    case "#register":
      app.innerHTML += logView(false)
      new LogContainer(false, window.onNavigate)
      break
    case "#dashboard":
      app.innerHTML += dashboardView()
      new DashboardContainer(window.onNavigate)
      break
    default:
      break
  }
}

export default function () {
  navigateToView(window.location.hash)
}
