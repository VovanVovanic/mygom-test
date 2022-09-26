import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import App from "../../App";
import { dataJSON } from "../data";

describe("Choices", () => {
  test("Adding to choices", () => {
    render(<App data={JSON.parse(dataJSON)} />)
    const bookElement = screen.getByText("It")
    expect(bookElement).toBeInTheDocument()
    fireEvent.click(bookElement)
    const choicesList = screen.getByTestId("choices-test")
    expect(choicesList.children.length === 1).toBeTruthy()
    const book2Element = screen.getByText("Stinger")
    expect(book2Element).toBeInTheDocument()
    fireEvent.click(book2Element)
    expect(choicesList.children.length === 2).toBeTruthy()

  })
})