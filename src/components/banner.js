import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text';


const Banner = ({ banner }) => {
    return (
        <div className='pt-24 container h-full flex flex-col justify-center items-center md:items-start'>
            <h1 className='font-black lg:text-6xl text-4xl mb-6 md:w-1/2'>{banner.title}</h1>
            <p className='mb-9 text-lg md:w-1/2'>{renderRichText(banner.description)}</p>
            <button className='button'>{banner.buttonText}</button>
        </div>
    )
}

export default Banner