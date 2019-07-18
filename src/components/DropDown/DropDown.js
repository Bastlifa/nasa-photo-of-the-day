import React from 'react'
import { Input } from 'semantic-ui-react'

export default function DropDown(props)
{
    const {date, setDate} = props
    const changeHandler = event => setDate(event.target.value)
    return (
        <Input type="date" value={date} onChange={changeHandler}></Input>
    )
}
