import classes from './Choices.module.scss'
import { useState } from 'react'

export const Choices = () => {
  const p = ['assdsasddasd',  'assdsasddasd', 'dsdsa', 'sdsdsd', 'ffgh']
  return (
    <ul className={classes.choices}>
      {p.map((el,i) => {
        return (
          <li key ={i} className={classes.item}>
            <span>
              {el}
            </span>
            <span className={classes.delete}>
                X
            </span>
          </li>
        )
      })}
      </ul>
  )
}