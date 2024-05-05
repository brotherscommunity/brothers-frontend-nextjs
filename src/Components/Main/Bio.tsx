import DisplayContent from "./Post/DisplayContent"

interface BioProps {
    content: string
}

export default function Bio({content}: BioProps) {
    return (
        <section className='bg-button border-none w-full h-[250px] px-10 py-6 '>
            <DisplayContent content={content} />
        </section>
    )
}
