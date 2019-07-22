import React from 'react'
import { Input } from 'semantic-ui-react'

export default function DropDown(props)
{
    const {date, setDate, today} = props
    const changeHandler = event => 
    {
        if(event.target.value > today)
        {
            event.target.value = today
        }
        setDate(event.target.value)

    }
    return (
        <Input type="date" value={date} onChange={changeHandler}></Input>
    )
}
