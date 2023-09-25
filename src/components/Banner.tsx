import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Banner = () => {

    const [text] = useTypewriter({
        words: ["Professional Coder", "Full Stack Developer", "UI/UX Designer"],
        loop: true,
        typeSpeed: 40,
        deleteSpeed: 30,
        delaySpeed: 4000,
    })

    return (
        <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 px-10 flex flex-col gap-4
        lgl:gap-8 xl:px-4'>
            <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className='text-lg font-titleFont tracking-wide uppercase'>
                Welcome to my world
            </motion.h3>
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'>
                <div>
                    Hi, I{"'"}m <span className='text-textGreen'>Yogi Meizal Putra</span>
                </div> 
                <span className='text-textDark mt-2 lgl:mt-4'>
                    a <span>{text}</span>
                    <Cursor 
                        cursorStyle = "|"
                        cursorColor = "#64ffda"
                        cursorBlinking
                    />
                </span>
            </motion.h1>
            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className='text-base md:max-2-[650px] text-textDark font-medium'>
                I am a full-stack web developer with knowledge of Javascript and PHP Experience. Skilled in creating user-friendly and responsive web or mobile applications. I can offer to you a design services, prepare a sketch of your future website or redesign of the existing one.{" "} 
                <a href="" target='_blank'>
                    <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                        Learn More
                        <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
                    </span>
                </a>
            </motion.p>
            <motion.button initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 '>
                Check out my project!
            </motion.button>
        </section>
    )
}

export default Banner