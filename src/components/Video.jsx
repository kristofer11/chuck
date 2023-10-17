import React from 'react'

const Video = ({source}) => {
    return (
        <iframe className='video' src={`${source}showinfo=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen ></iframe>
    )
}

export default Video