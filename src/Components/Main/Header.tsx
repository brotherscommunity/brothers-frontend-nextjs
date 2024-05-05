import React from 'react'
import Carousel from './Carousel'
import { Slides } from '@/constants'

export default function Header() {
    return (
        <header className='flex items-center justify-center max-md:mt-20 mt-12'>
            <div className='max-w-[1158px] max-h-[620px]'>
                <Carousel slides={Slides} />
            </div>
        </header>
    )
}
