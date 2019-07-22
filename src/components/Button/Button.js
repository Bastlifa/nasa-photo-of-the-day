import React from 'react'

export default function Button(props)
{
    const {textContent, date, setDate, today} = props;
    let handleClick = (event) => 
    {
        if(event.target.textContent === "<")
        {
            let dayBefore = new Date(date);
            dayBefore.setDate(dayBefore.getDate())

            let dd = String(dayBefore.getDate()).padStart(2, '0');
            let mm = String(dayBefore.getMonth() + 1).padStart(2, '0');
            let yyyy = dayBefore.getFullYear();

            dayBefore = `${yyyy}-${mm}-${dd}`

            console.log('date',date)
            console.log('dayBefore',dayBefore)


            setDate(dayBefore)
        }
        else if (event.target.textContent === ">")
        {
            console.log('a')
            let dayAfter = new Date(date);
            dayAfter.setDate(dayAfter.getDate())

            let dd = String(dayAfter.getDate() + 2).padStart(2, '0');
            let mm = String(dayAfter.getMonth() + 1).padStart(2, '0');
            let yyyy = dayAfter.getFullYear();

            dayAfter = `${yyyy}-${mm}-${dd}`

            console.log('date',date)
            console.log('dayAfter',dayAfter)


            setDate(dayAfter)
        }
    }
    return (
        <button className="left-right" onClick={handleClick}>{textContent}</button>
    )
}