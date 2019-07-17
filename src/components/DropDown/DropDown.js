import React from 'react'

export default function DropDown(props)
{
    const {date, setDate} = props
    const changeHandler = event => setDate(event.target.value)
    return (
        <input type="date" value={date} onChange={changeHandler}></input>
    )
}
