import classes from './Group.module.scss'
import { getClearLabel } from '../../utils/utils'
import { useState } from 'react'

interface IGroups{
  groups: Array<string> | Array<number>
  setGroupBy: (item: string) => void
  setGroup: (group: boolean) => void
}
export const GroupChoices: React.FC<IGroups> = ({ groups, setGroupBy, setGroup }) => {
  
  const [groupClass, setGroupClass] = useState<string>("none")

 const onGroupBy = (group: string) => {
   if (group.toLowerCase() === "none") {
     setGroupClass("none")
     setGroup(false)
     setGroupBy("")
     return
   }
   setGroupClass(group)
   setGroupBy(group)
   setGroup(true)
  }


  return (
    <div className={classes.group}>
      <h5 style={{margin: "0 0 5px 0"}}>
        Group By
      </h5>
      <div style={{display: "flex"}}>
        {groups.map((el, i) => {
          return (
            <div
              onClick={()=>onGroupBy(el)}
              className={groupClass === el ? classes.checked : classes.btn}
              data-testid = 'for-group'
              key={el}>{getClearLabel(el)}</div>
          )
        })}
      </div>

    </div>
  )
}