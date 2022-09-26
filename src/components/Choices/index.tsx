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
  const [elements, setElements] = useState<DataType>([])

  const elemHandler = () => {
    if (typeof (data[0]) === 'object') {
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
    onRemove(item)
  }

  return (
    <>
      {elements.length ?
        <ul className={classes.choices} data-testid= "choices-test">
          {elements.map((el: ItemType, i: number) => {
            return (
              <li key={i} className={classes.item} data-testid="for-choices">
                <span>
                  {getClearLabel(el)}
                </span>
                <span className={classes.delete} onClick={() => removeHandler(el)} data-testid="for-remove" />
              </li>
            )
          })}
        </ul> : <></>
      }
    </>

  )
}