import classes from './Dropdown.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import { useEffect, useReducer, useState } from 'react'
import { List } from '../List'
import { Choices } from '../Choices'
import { init, useValidator } from '../../utils/hooks'
import { dataHandler } from '../../utils/utils'
import { GroupChoices } from '../Group'
import { DataType, ItemType } from '../../utils/types'
import { Message } from '../Message'
import { reducer } from '../../utils/reducer'

interface IDropdown {
    data: any
    theme: string
}
export const Dropdown: React.FC<IDropdown> = ({ data, theme }) => {
    const [open, setOpen] = useState<boolean>(false)
    const [group, setGroup] = useState<boolean>(false)
    const [groupBy, setGroupBy] = useState<string | number>("")
    const [choices, setChoices] = useState<DataType>([])
    const [message, setMessage] = useState<string | null>(null)
    const [state, dispatch] = useReducer(reducer, init)
   

    const { dataReduced, keys, flatArray, error } = useValidator(data)
    const dataProceeded = !error && dataHandler(data, flatArray, dataReduced, keys, theme, group, groupBy)
    const cls = [classes.arrow]
    open && cls.push(classes.arrowRotated)
    const groupsArr = (keys as any[]).filter((k) => k !== theme)
    groupsArr.push("none")

    const onOpenClose = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (error) {
            setMessage("Validation Data Error")
        }
        if (!message) {
            dispatch({ type: "error", payload: false })
        }
    }, [error, message])

    const onSelect = (item: ItemType) => {
        let res = item
        const isDuplicate = choices.some((el) => el[theme] === item) || choices.some((el) => el === item)
        if (isDuplicate) {
            setMessage(`You've already chosen this ${theme}`)
            return
        }
        if (dataReduced && dataReduced[theme]) {
            res = data.find((el: Object) => el[theme] === item)
        }
        setChoices([...choices, res])
        
    }


    const removeHandler = (item: ItemType) => {
        if (dataReduced && dataReduced[theme]) {
            const filtered = choices .filter((el: Object) => el[theme] !== item)
            setChoices(filtered)
        }
        else {
            const filtered = choices.filter((el: Object) => el !== item)
            setChoices(filtered)
        }
    }

    return (
        <>
            {!message ? <div className={classes.dropdownWrapper} >
                <Choices data={choices} theme={theme} onRemove={removeHandler} />
                {!flatArray.length ? <GroupChoices groups={groupsArr} setGroupBy={setGroupBy} setGroup={setGroup} /> : ""}
                <div className={classes.dropdown} >
                    <span className={classes.text}> {`Choose your ${theme}`}</span>
                    <div className={classes.arrowBox} role={'button'}  onClick={onOpenClose}>
                        <Arrow className={cls.join(' ')}  />
                    </div>
                </div>
                {dataProceeded ?
                    <List open={open} data={dataProceeded} group={group} groupBy={groupBy} setItem={onSelect} /> :
                    <></>
                }
            </div > :
                <Message message={message} setMessage={setMessage} error={error} />
            }
        </>
    )
}
