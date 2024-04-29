import React from 'react'
import Carousel from '../Carousel'
import { Slides } from '@/constants'

export default function Header() {
    return (
        <header className='flex items-center justify-center mt-12 mx-auto'>
            <div className='max-w-[1158px] max-h-[620px]'>
                <Carousel slides={Slides} />
            </div>
        </header>
    )
}
