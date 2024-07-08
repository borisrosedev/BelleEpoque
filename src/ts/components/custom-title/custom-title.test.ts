import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"
import customTitle from "./custom-title"

describe("title suite", () => {
  beforeAll(() => {
    const data = {
      className: "custom-title--h1",
      textContent: "Page | Accueil"
    }
    document.body.innerHTML += customTitle(data)
  })

  test("should have a H1 Page | Accueil", () => {
    const h1 = screen.getByRole("heading")
    expect(h1).toBeInTheDocument()
    expect(h1).toHaveTextContent("Page | Accueil")
  })
})
