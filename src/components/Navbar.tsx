'use client'

import React, { useRef, useState } from 'react'
import '@/app/globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { logo } from '../../public'
import { MdOutlineClose } from 'react-icons/md'
import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialYoutube, SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram  } from 'react-icons/sl'

const Navbar = () => {
    
    const ref = useRef<string | any>("");
    const [showMenu, setShowMenu] = useState(false)

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setShowMenu(false);
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth"
        })
        // update the class name of the click link
        const links = document.querySelectorAll('.nav-link')
        links.forEach(link => {
            link.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    }

    function handleClick(e:any) {
        if(e.target.contains(ref.current)) {
            setShowMenu(false);
        }
    }

    return (
        <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
            <div className='max-w-container h-full mx-auto py-1 flex items-center justify-between font-titleFont'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Link 
                        href="#home"
                        onClick={handleScroll} 
                        >
                        <Image src={logo} alt='logo' className='w-12'/>
                    </Link>
                </motion.div>
                <div className='hidden mdl:inline-flex items-center gap-7'>
                    <ul className='flex text[13px] gap-7'>
                        <Link 
                            href="#home"
                            onClick={handleScroll} 
                            className=' flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 n '>
                            <motion.li 
                                initial={{ y: -10, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                transition={{ duration: 0.1 }}>
                                    Home
                            </motion.li>
                        </Link>
                        <Link 
                            href="#about" 
                            onClick={handleScroll} 
                            className=' flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                            <motion.li 
                                initial={{ y: -10, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                transition={{ duration: 0.1, delay: 0.1 }}>
                                    About
                                </motion.li>
                        </Link>
                        <Link 
                            href="#experience" 
                            onClick={handleScroll}
                            className=' flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                            <motion.li 
                                initial={{ y: -10, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                transition={{ duration: 0.1, delay: 0.1 }}>
                                    Experience
                                </motion.li>
                        </Link>
                        <Link 
                            href="#project"
                            onClick={handleScroll} 
                            className=' flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                            <motion.li 
                                initial={{ y: -10, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                transition={{ duration: 0.1, delay: 0.1 }}>
                                    Project
                                </motion.li>
                        </Link>
                        <Link 
                            href="#contact" 
                            onClick={handleScroll} 
                            className=' flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                            <motion.li 
                                initial={{ y: -10, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                transition={{ duration: 0.1, delay: 0.4 }}>
                                    Contact
                            </motion.li>
                        </Link>
                    </ul>
                    <a href="/assets/resume.pdf" target='_blank'>
                        <motion.button className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            Resume
                        </motion.button>
                    </a>
                </div>
                {/* Small icon section */}
                <div onClick={() => setShowMenu(true)} className=' w-6 h-6 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                </div>
                {
                    showMenu && (
                        <div 
                            ref={(node) => (ref.current = node)}
                            onClick={handleClick}
                            className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
                        >
                            <motion.div
                                initial={{ x: 20, opacity: 0 }} 
                                animate={{ x: 0, opacity: 1 }} 
                                transition={{ duration: 0.1, delay: 0.4 }} 
                                className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'
                            >
                                <MdOutlineClose 
                                    onClick={() => setShowMenu(false)}
                                    className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4'
                                />
                                <div className='flex flex-col items-center gap-7'>
                                    <ul className='flex flex-col text-base gap-7'>
                                        <Link 
                                            href="#home"
                                            onClick={handleScroll} 
                                            className=' flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 n '>
                                            <motion.li 
                                                initial={{ y: -10, opacity: 0 }} 
                                                animate={{ y: 0, opacity: 1 }} 
                                                transition={{ duration: 0.1 }}>
                                                    Home
                                            </motion.li>
                                        </Link>
                                        <Link 
                                            href="#about" 
                                            onClick={handleScroll} 
                                            className=' flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                            <motion.li 
                                                initial={{ y: -10, opacity: 0 }} 
                                                animate={{ y: 0, opacity: 1 }} 
                                                transition={{ duration: 0.1, delay: 0.1 }}>
                                                    About
                                                </motion.li>
                                        </Link>
                                        <Link 
                                            href="#experience" 
                                            onClick={handleScroll}
                                            className=' flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                            <motion.li 
                                                initial={{ y: -10, opacity: 0 }} 
                                                animate={{ y: 0, opacity: 1 }} 
                                                transition={{ duration: 0.1, delay: 0.1 }}>
                                                    Experience
                                                </motion.li>
                                        </Link>
                                        <Link 
                                            href="#project"
                                            onClick={handleScroll} 
                                            className=' flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                            <motion.li 
                                                initial={{ y: -10, opacity: 0 }} 
                                                animate={{ y: 0, opacity: 1 }} 
                                                transition={{ duration: 0.1, delay: 0.1 }}>
                                                    Project
                                                </motion.li>
                                        </Link>
                                        <Link 
                                            href="#contact" 
                                            onClick={handleScroll} 
                                            className=' flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                            <motion.li 
                                                initial={{ y: -10, opacity: 0 }} 
                                                animate={{ y: 0, opacity: 1 }} 
                                                transition={{ duration: 0.1, delay: 0.4 }}>
                                                    Contact
                                            </motion.li>
                                        </Link>
                                    </ul>
                                    <a href="/assets/resume.pdf" target='_blank'>
                                        <motion.button className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                            Resume
                                        </motion.button>
                                    </a>
                                    <div className='flex gap-4'>
                                        <a href="https://github.com/yogimp" target='_blank'>
                                            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                                <TbBrandGithub />
                                            </span>
                                        </a>
                                        <a href="https://www.youtube.com/@skillmaster2200" target='_blank'>
                                            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                                <SlSocialYoutube/>
                                            </span>
                                        </a>
                                        <a href="https://www.linkedin.com/in/yogi-meizal-putra/" target='_blank'>
                                            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                                <SlSocialLinkedin />
                                            </span>
                                        </a>
                                        <a href="https://github.com/yogimp" target='_blank'>
                                            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                                <SlSocialFacebook />
                                            </span>
                                        </a>
                                        <a href="https://www.instagram.com/yogimeizal/" target='_blank'>
                                            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                                <SlSocialInstagram />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <motion.a 
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ delay: 1.2, ease: 'easeIn' }}
                                    href="yogimeizalputra@gmail.com"
                                    className='text-sm w-72 tracking-widest text-textGreen text-center mt-4'
                                >
                                    yogimeizalputra@gmail.com
                                </motion.a>
                            </motion.div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar