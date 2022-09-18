import classes from './Choices.module.scss'
import { useEffect, useState } from 'react'
import { DataType, ItemType } from '../../utils/types'
import { getClearLabel } from '../../utils/utils'

interface IChoices {
  data: DataType
  theme: string
  onRemove: (item:ItemType) => void
}
export const Choices:React.FC<IChoices> = ({data, theme, onRemove}) => {
  const[elements, setElements] = useState<DataType>([])
  
  const elemHandler = () => {
    if (typeof (data[0] === 'object')) {
      return data.map((el: Object) => el[theme])
    }
    else {
      return data
    }
  }
  useEffect(() => {
    setElements(elemHandler())
  }, [data])

  const removeHandler = (item: ItemType) => {
    console.log(item, "fdfgfgdfg")
    onRemove(item)
  }

  return (
    <>
      {elements.length ?
        <ul className={classes.choices}>
          {elements.map((el: ItemType, i: number) => {
            return (
              <li key={i} className={classes.item}>
                <span>
                  {getClearLabel(el)}
                </span>
                <span className={classes.delete} onClick={()=>removeHandler(el)} />
              </li>
            )
          })}
        </ul> : <></>
      }
    </>

  )
}