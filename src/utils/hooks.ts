import {useEffect, useReducer } from "react"
import { reducer } from "./reducer"

const init = {
  error: false,
  keys: [],
  dataReduced: [],
  flatArray: []
}
export type State = {
  error: boolean
  keys: Array<string> | Array<number>
  flatArray: Array<string> | Array<number> 
  dataReduced: Array<Object>
}
export type Action =
  | { type: 'error', payload: boolean }
  | { type: 'keys', payload: Array<string> | Array<number> }
  | { type: 'flat', payload: Array<string> | Array<number> }
  | { type: 'reduced', payload: Array<Object> };


export const useValidator = (data: any): State => {
  const [state, dispatch] = useReducer(reducer, init)
  const { error, keys, dataReduced, flatArray } = state
  
  useEffect(() => {
    if (!Array.isArray(data)) {
      dispatch({ type: 'error', payload: true })
      return
    }
    const flatObjectCheck = (items: Array<any>) => {
      items.forEach((item) => {
        if (Array.isArray(item)) {
          dispatch({ type: 'error', payload: true })
          return
        }

        const allowedTypes = ['string', 'number']
        const values = Object.values(item)
        const isValuesAllowedTypes = values.every((val) => allowedTypes.includes(typeof (val)))

        if (!isValuesAllowedTypes) {
          dispatch({ type: 'error', payload: true })
        }
      })
    }

    const isPrimitive = !error && data.every((el: any) => typeof (el) === 'number' || typeof (el) == 'string')
    const isObj = !error && data.every((el: any) => typeof (el) === 'object')

    if (!isPrimitive && !isObj) {
      dispatch({ type: 'error', payload: true })
      return
    }

    if (isPrimitive) {
      dispatch({ type: 'flat', payload: [...data]})
    }

    flatObjectCheck(data)

    if (!error) {
      const keys = Object.keys(data[0])
      const dataReduced = data.reduce((acc:Object, el:Object) => {
        Object.entries(el).forEach(([key, value]) => {
          if (acc[key]) {
            acc[key] = [...acc[key], value];
          } else {

            acc[key] = [value];
          }
        });
        return acc;
      }, {});

      for (let key in dataReduced) {
        const set = new Set(dataReduced[key])
        const arr = [...set]
        dataReduced[key] = arr
      }

      dispatch({ type: 'keys', payload: keys })
      dispatch({ type: 'reduced', payload: dataReduced })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  if (error) {
    console.log("Invalid date")
  }
  return {
    error,
    keys,
    dataReduced,
    flatArray
  } 
}