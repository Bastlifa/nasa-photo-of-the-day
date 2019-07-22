import React from 'react'
// import Button from '../Button/Button'
import DropDown from '../DropDown/DropDown'
import { Header } from '../StyleVariables'
// import 'semantic-ui-css/semantic.min.css'

export default function HeaderSection(props)
{
    const {date, setDate, today} = props;
    return (
        <header>
            <Header>NASA Picture of the Day Via React</Header>
            {/* <Button /> */}
            <DropDown date={date} setDate={setDate} today={today}/>
        </header>
    )
}