import { HomeContainer } from "./src/ts/containers/home-container/home-container"
import { MenuContainer } from "./src/ts/containers/menu-container/menu-container"
import header from "./src/ts/layout/header/header"
import homeView from "./src/ts/views/home-view/home-view"
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
  switch (h) {
    case "":
      app.innerHTML += homeView()
      new HomeContainer(window.onNavigate)
      break;
    case "#menu":
      app.innerHTML += menuView()
      new MenuContainer(window.onNavigate)
      break
    case "#login":
      break
    case "#register":
      break
    default:
      break
  }
}

export default function () {
  navigateToView(window.location.hash)
}
