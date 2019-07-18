import React from 'react'
import MediaTitle from '../MediaTitle/MediaTitle'
import MediaDescription from '../MediaDescription/MediaDescription'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

// export default function Media(props)
// {
//     const {mediaURL, mediaType, mediaTitle, mediaP} = props;

//     return (
//         <div className="main-picture-div">
//             <MediaTitle mediaTitle={mediaTitle}/>
//             {mediaType==="image" ? <img src={mediaURL} alt='' /> : <iframe src={mediaURL} title={mediaTitle} ></iframe>}
//             <br />
//             <br />
//             <MediaDescription mediaP={mediaP}/>
//         </div>
//     )
// }

export default function Media(props)
{
    return (
        <Card
            image={props.mediaURL}
            header={props.mediaTitle}
            description={props.mediaP}
        />
    )
}