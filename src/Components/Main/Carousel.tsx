"use client"

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

type Image = StaticImageData;

interface CarouselProps {
    slides: Image[]
    autoSlide?: boolean,
    autoSlideInterval?: number
}

export default function Carousel({slides, autoSlide=false, autoSlideInterval=2000}: CarouselProps) {

    const [currentSlide, setCurrentSlide] = useState<number>(0)
    /**
     * A function to move the slide to the previous
     */
    const handlePrevious = () => {
        setCurrentSlide((currentslide) => currentslide === 0 ? slides?.length - 1 : currentSlide - 1 )
    }
    const handleNext = () => {
        setCurrentSlide((curslide) => curslide === slides.length -1 ? 0 : curslide + 1)
    }

    useEffect(() => {
        if(!autoSlide) return
        // Automatically slide to the next image after waiting for 2 seconds
        const slideInterval = setInterval(handleNext, autoSlideInterval)
        // clean-up function to remove the compnent from the DOM when it unmounts
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <section className='overflow-hidden relative mr-5'>
            <div className="flex gap-10 relative transition-transform ease-out duration-500" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                {slides.map((slide, i) => {
                    return (
                        <Image key={i} src={slide} alt="slider-image" width={1160} height={600} className="max-sm:rounded-md md:rounded-[20px] object-cover" />
                    )
                })}
                <div className="absolute inset-0 bg-black opacity-60 max-sm:rounded-md md:rounded-[30px]" />
            </div>  
            <div className="absolute inset-0 top-1/2 mb-10 max-sm:-mx-3 sm:-mx-1 md::mx-2 lg:mx-8">
                <div className="flex items-center justify-between p-4 ">
                    <button className="slider-buttons" onClick={handlePrevious}>
                        <IoIosArrowBack width={20} height={20} />
                    </button>
                    <button className="slider-buttons" onClick={handleNext}>
                        <IoIosArrowForward width={20} height={20} />
                    </button>
                </div>
            </div>
            <div className="absolute max-sm:bottom-10 sm:bottom-20 md:bottom-28 xl:bottom-48 right-0 left-0 mt-16">
                <div className="flex items-center justify-center gap-3">
                    {slides.map((_, i) => {
                        return (
                            <div key={i} onClick={() => setCurrentSlide(i)} className={`transition-all w-3 h-3 hover:cursor-pointer rounded-full ${currentSlide === i ? " bg-blue-600" : "bg-white opacity-80"} `} />
                        )
                    })}
                </div>
            </div>
            <div className="absolute max-sm:top-10 sm:top-14 md:top-20 xl:top-44 right-0 left-0 text-white flex flex-col items-center justify-center">
                <h2 className="max-md:text-base md:text-2xl xl:text-4xl bg-clip-text font-palanquin"> Welcome to Brothers International Community! </h2> 
                <p className="max-md:w-[300px] w-[550px] max-lg:mt-3 lg:mt-7 xl:mt-3 text-center max-sm:text-xs sm:text-sm md:text-lg lg:text-xl leading-7"> Join us in fostering a community of brotherhood, collaboration, and knowledge-sharing. Explore the diverse perspectives and engage with fellow members. </p>
            </div>
        </section>
    )
}
