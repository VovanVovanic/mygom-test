import classes from './Dropdown.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import { useEffect, useState } from 'react'
import { List } from '../List'
import { Choices } from '../Choices'
import { useValidator } from '../../utils/hooks'
import { dataHandler } from '../../utils/utils'
import { GroupChoices } from '../Group'
import { DataType, ItemType } from '../../utils/types'

interface IDropdown {
    data: any
    theme: string
}
export const Dropdown: React.FC<IDropdown> = ({ data, theme }) => {
    const [open, setOpen] = useState<boolean>(false)
    const [group, setGroup] = useState<boolean>(false)
    const [groupBy, setGroupBy] = useState<string | number>("")
    const [choices, setChoices] = useState<DataType>([])

    const { dataReduced, keys, flatArray, error } = useValidator(data)
    const dataProceeded = !error && dataHandler(data, flatArray, dataReduced, keys, theme, group, groupBy)
    const cls = [classes.arrow]
    open && cls.push(classes.arrowRotated)
    const groupsArr = (keys as any[]).filter((k) => k !== theme)
    groupsArr.push("none")

    const onOpen = () => {
        setOpen(!open)
    }

    const duplicatesChecker = (item: ItemType) => {
        let res = item
        const isDuplicate = choices.some((el) => el[theme] === item) || choices.some((el) => el === item)
        if (isDuplicate) {
            console.log(`You've already chosen this ${theme}`)
            return
        }
        if (dataReduced) {
            res = data.find((el: Object) => el[theme] === item)
        }
        setChoices([...choices, res])
    }

    const removeHandler = (item: ItemType) => {
        if (dataReduced) {
            const filtered = (choices as any).filter((el: Object) => el[theme] !== item)
            setChoices(filtered)
        }
        else {
            const filtered = (choices as any).filter((el: Object) => el !== item)
            setChoices(filtered)
        }
    }

    return (
        <div className={classes.dropdownWrapper}>
            <Choices data={choices} theme={theme} onRemove={removeHandler} />
            <GroupChoices groups={groupsArr} setGroupBy={setGroupBy} setGroup={setGroup} />
            <div className={classes.dropdown} >
                <span className={classes.text}> {`Choose your ${theme}`}</span>
                <div className={classes.arrowBox} onClick={onOpen}>
                    <Arrow className={cls.join(' ')} />
                </div>
            </div>
            {!error && dataProceeded ?
                <List open={open} data={dataProceeded} group={group} groupBy={groupBy} setItem={duplicatesChecker} /> :
                <div>Render Error</div>}
        </div>
    )
}
