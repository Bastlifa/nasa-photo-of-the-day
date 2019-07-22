import React from 'react'
import MediaTitle from '../MediaTitle/MediaTitle'
import MediaDescription from '../MediaDescription/MediaDescription'

export default function Media(props)
{
    const {mediaURL, mediaType, mediaTitle, mediaP} = props;

    return (
        <div className="main-picture-div">
            <MediaTitle mediaTitle={mediaTitle}/>
            {mediaType==="image" ? <img src={mediaURL} alt='' /> : <iframe src={mediaURL} title={mediaTitle} ></iframe>}
            <br />
            <br />
            <MediaDescription mediaP={mediaP}/>
        </div>
    )
}