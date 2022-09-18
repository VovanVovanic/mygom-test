import React, { useMemo } from 'react'
import classes from './List.module.scss'

interface IList {
  open: boolean
  group: boolean
  groupBy: string | number
  data: any
}
export const List: React.FC<IList> = ({ open, data, group, groupBy }) => {

  const cls = [classes.list]
  open && cls.push(classes.listActive)

  const groupKey = Object.keys(data)
  return (
    <ul className={cls.join(" ")}>
      {group ?
        <>
          {
            groupKey.map((el, i) => {
              return (
                <li key={i}>
                  <div className={classes.groupName}>{el}</div>
                  <ul className={classes.group}>
                    {data[el].map((e: string | number) => {
                      return (
                        <li
                          key={el}
                          className={classes.item}
                        >{e}</li>
                      )
                    })}
                  </ul>
                </li>
              )
            })
          }
        </>
        :
        <>
          {
            data.map((el: string) => {
              return (
                <li
                  key={el}
                  className={classes.item}
                >{el}</li>
              )
            })
          }
        </>
      }
    </ul>
  )
}