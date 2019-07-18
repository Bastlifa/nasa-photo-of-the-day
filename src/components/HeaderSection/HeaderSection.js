import React from 'react'
// import Button from '../Button/Button'
import DropDown from '../DropDown/DropDown'


export default function HeaderSection(props)
{
    const {date, setDate} = props;
    return (
        <header>
            <h1>NASA Picture of the Day Via React</h1>
            {/* <Button /> */}
            <DropDown date={date} setDate={setDate}/>
        </header>
    )
}