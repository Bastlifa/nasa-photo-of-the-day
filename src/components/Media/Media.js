import React from 'react'
import MediaTitle from '../MediaTitle/MediaTitle'
import MediaDescription from '../MediaDescription/MediaDescription'
import { Card, Image, Divider } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'

export default function Media(props)
{
    const {mediaURL, mediaType, mediaTitle, mediaP} = props;

    return (
        <Card className="media-card">
            <MediaTitle mediaTitle={mediaTitle}/>
            <Divider inverted />
            {mediaType==="image" ? <Image src={mediaURL} alt='' /> : <iframe src={mediaURL} title={mediaTitle} ></iframe>}
            <Divider inverted />
            <MediaDescription mediaP={mediaP}/>
        </Card>
    )
}

// export default function Media(props)
// {
//     return (
//         <Card
//             image={props.mediaURL}
//             header={props.mediaTitle}
//             description={props.mediaP}
//         />

//     )
// }