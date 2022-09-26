import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import App from "../../App";
import { dataJSON } from "../data";

describe("Group", () => {
  test("Grouping", async () => {
    render(<App data={JSON.parse(dataJSON)} />)
    const btnGroup = screen.queryAllByTestId('for-group')
    expect(btnGroup[0]).toBeInTheDocument()
    fireEvent.click(btnGroup[0])
    expect(screen.queryByTestId('grouped-list')).toBeInTheDocument()
    fireEvent.click(btnGroup[2])
    expect(screen.queryByTestId('grouped-list')).toBeNull()
  })
})