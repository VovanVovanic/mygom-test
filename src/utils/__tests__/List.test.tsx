import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import App from "../../App";
import { List } from "../../components/List";
import { dataJSON } from "../data";

const frameworks = ['React', 'Vue', 'Angular']
const onClickHandler = jest.fn()

describe('List', () => {
  test('List items render', () => {
    render(<List data={frameworks} open={true} group={false} groupBy={""} setItem={onClickHandler} />)
    expect(screen.getByText(/React/)).toBeInTheDocument()
    expect(screen.getByText(/Angular/)).toBeInTheDocument()
  })
  test('List items render empty', () => {
    render(<List data={[]} open={true} group={false} groupBy={""} setItem={onClickHandler} />)
    expect(screen.queryByText(/React/)).toBeNull()
  })

  test('List snapshot', () => {
    const list = render(<List data={frameworks} open={true} group={false} groupBy={""} setItem={onClickHandler} />)
    expect(list).toMatchSnapshot()
  })

  test("Arrow", async () => {
    render(<App data={JSON.parse(dataJSON)} />)
    const btn = await screen.findByRole('button')
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('dropdown-test')).toBeInTheDocument()
  })
})