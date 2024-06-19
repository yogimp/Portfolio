import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='max-w-contentContainer mx-auto h-screen py-10 xl:py32 flex flex-col gap-4 items-center justify-center'>
            <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
                Whats Next?
            </p>
            <h2 className='font-titleFont text-5xl font-semibold'>
                Get In Touch
            </h2>
            <p className='max-w-[600px] text-center text-textDark'>
                I always open for any new opportunities, consultation or about project. My inbox is always open whether you have question or just say hi, I will try my best to get back to you!
            </p>
            <a href = "https://mail.google.com/mail/?view=cm&fs=1&to=yogimeizalputra@gmail.com" target='_blank'>
                <button className='w-40 h-12 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>Say Hello</button>
            </a>
        </section>
    )
}

export default Contact