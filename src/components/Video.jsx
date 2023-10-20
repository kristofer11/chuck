import React from 'react'

const Video = ({source}) => {
    return (
        <iframe className='video' src={`${source}showinfo=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowFullScreen ></iframe>
    )
}

export default Video