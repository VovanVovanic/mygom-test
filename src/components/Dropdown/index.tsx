import classes from './Dropdown.module.scss'
import {ReactComponent as Arrow} from '../../assets/arrow.svg'
import {  useState } from 'react'
import { List } from '../List'
import { Choices } from '../Choices'
import { useValidator } from '../../utils/hooks'
import { dataHandler } from '../../utils/utils'

interface IDropdown {
    data: any
    theme: string
}
export const Dropdown:React.FC<IDropdown> = ({data, theme}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [group, setGroup] = useState<boolean>(false)
    const [groupBy, setGroupBy] = useState<string | number>("")
    const onOpen = () => {
        setOpen(!open)
    }

    const { dataReduced, keys, flatArray, error } = useValidator(data)
   
    const dataProceeded = !error && dataHandler(data, flatArray, dataReduced, keys, "book", group, "genre")
   
    const cls = [classes.arrow]
    open && cls.push(classes.arrowRotated)
    return (
        <div className={classes.wrapper}>
            <div className={classes.dropdown} >
            <Choices />
                <div className={classes.arrowBox} onClick={onOpen}>
                <Arrow className={cls.join(' ')} />
            </div>
            </div>
            {!error && dataProceeded ?
                <List open={open} data={dataProceeded} group={group} groupBy={ groupBy} /> :
                <div>Render Error</div>}
        </div>
    )
}
