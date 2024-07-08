import { screen } from "@testing-library/dom"
import homeView from "./home-view"
import "@testing-library/jest-dom"

let app
describe("Home View Suite", () => {
  beforeAll(() => {
    app = document.createElement("div")
    app.id = "app"
    document.body.appendChild(app)
    app.innerHTML += homeView()
  })

  test("should exist a main", () => {
    expect(screen.getByRole("main")).toBeInTheDocument()
  })

  test("should a h1 With TextContet Home View", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Page | Accueil")
  })
})
