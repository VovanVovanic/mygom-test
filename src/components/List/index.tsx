import React, { useMemo } from 'react'
import { DataType, ItemType } from '../../utils/types'
import { getClearLabel } from '../../utils/utils'
import classes from './List.module.scss'

interface IList {
  open: boolean
  group: boolean
  groupBy: string | number
  data: DataType
  setItem: (item:ItemType) => void
}
export const List: React.FC<IList> = ({ open, data, group, groupBy, setItem }) => {

  const cls = [classes.list]
  open && cls.push(classes.listActive)

  const groupKey = Object.keys(data)

  const onItemSet = (item: ItemType) => {
    console.log(item, "dddddd")
    setItem(item)
  }
  return (
    <ul className={cls.join(" ")}>
      {group ?
        <>
          {
            groupKey.map((el, i) => {
              return (
                <li key={i}>
                  <div className={classes.groupName}>{ getClearLabel(el) }</div>
                  <ul className={classes.group}>
                    {data[el].map((e: string | number, i:number) => {
                      return (
                        <li
                          key={i}
                          className={classes.item}
                          onClick={()=>onItemSet(e)}
                        >{getClearLabel(e) }</li>
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
            data.map((el: ItemType, i:number) => {
              return (
                <li
                  key={i}
                  onClick = {()=> onItemSet(el)}
                  className={classes.item}
                >{getClearLabel(el)}</li>
              )
            })
          }
        </>
      }
    </ul>
  )
}