import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import App from "../../App";
import { List } from "../../components/List";
import { dataJSON } from "../data";




const msg = 'test'


afterEach(cleanup)

test('App', () => {
  render(<App data={JSON.parse(dataJSON)} />);
  const linkElement = screen.getByText('Group By')
  expect(linkElement).toBeInTheDocument()
})

 //screen.debug()


