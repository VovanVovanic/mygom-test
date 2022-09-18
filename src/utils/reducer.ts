import { Action, State} from "./hooks";

export const reducer = (state: State, action:Action) => {
  switch (action.type) {
    
    case 'error':
      return { ...state, error: action.payload }
    case 'flat':
      return { ...state, flatArray: action.payload }
    case 'reduced':
      return { ...state, dataReduced: action.payload }
    case 'keys':
      return {...state, keys: action.payload}
    default:
      return state
  }
}