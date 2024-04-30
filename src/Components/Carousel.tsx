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
        console.log("prev")
        setCurrentSlide((currentslide) => currentslide === 0 ? slides?.length - 1 : currentSlide - 1 )
    }
    const handleNext = () => {
        console.log("next")
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
                        <Image key={i} src={slide} alt="slider-image" width={1138} height={600} className="rounded-[20px] object-cover" />
                    )
                })}
                <div className="absolute inset-0 bg-black opacity-60 rounded-[30px]"></div>
            </div>  
            <div className="absolute inset-0 flex items-center justify-between p-4 mb-10 mx-5">
                <button className="slider-buttons" onClick={handlePrevious}>
                    <IoIosArrowBack width={20} height={20} />
                </button>
                <button className="slider-buttons" onClick={handleNext}>
                    <IoIosArrowForward width={20} height={20} />
                </button>
            </div>
            <div className="absolute bottom-48 right-0 left-0 mt-16">
                <div className="flex items-center justify-center gap-3">
                    {slides.map((_, i) => {
                        return (
                            <div key={i} onClick={() => setCurrentSlide(i)} className={`transition-all w-3 h-3 hover:cursor-pointer rounded-full ${currentSlide === i ? " bg-blue-600" : "bg-white opacity-80"} `} />
                        )
                    })}
                </div>
            </div>
            <div className="absolute top-44 right-0 left-0 text-white flex flex-col items-center justify-center">
                <h2 className="text-4xl bg-clip-text"> Welcome to Brothers International Community! </h2> 
                <p className="w-[550px] mt-3 text-center text-lg leading-7"> Join us in fostering a community of brotherhood, collaboration, and knowledge-sharing. Explore the diverse perspectives and engage with fellow members. </p>
            </div>
        </section>
    )
}
