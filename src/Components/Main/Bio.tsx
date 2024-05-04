


// TODO: TO convert the HTML string into a React element use the <DisplayContent /> compnent 
export default function Bio() {
    return (
        <section className='bg-button border-none w-full h-[250px] px-10 py-6 '>
            {/* TODO: Find a way to render the Markdown in a elegant way */}
            <p className="text-base text-stone-600 leading-6"> The bio of the user is rendered in Markdown and will be placed here. This section is dedicated to showcasing the user's personality, skills, and experiences in a concise and visually appealing way. Whether you're a developer, designer, writer, or entrepreneur, this is your chance to tell your story and make a lasting impression on your audience. </p>
        </section>
    )
}
