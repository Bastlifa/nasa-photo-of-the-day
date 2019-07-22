import React from 'react'

export default function MediaTitle(props)
{
    const {mediaTitle} = props

    return (
        <div>
            <h2 className="media-title">{mediaTitle}</h2>
        </div>
    )
}