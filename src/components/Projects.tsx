import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { changelly, foca, musixmatch } from '../../public'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
    return (
        <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
            <SectionTitle title='Some Things I have Build' />
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                {/* {Project One} */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a href="https://foca.club/" target='_blank' className='w-full xl:w-1/2 h-auto relative group'>
                            <div>
                                <Image className='w-full h-full object-contain' src={foca} alt='foca'/>
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>
                                Foca Ahorra
                            </h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, voluptas ipsam eveniet adipisci possimus eligendi neque rerum eaque, <span className='text-textGreen' >reprehenderit</span> labore necessitatibus quod quas eum. Laudantium temporibus perferendis pariatur fugit vero.
                            </p>
                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>Nextjs</li>
                                <li>Typescript</li>
                                <li>Next-auth</li>
                                <li>Stripe</li>
                                <li>Vercel Deployment</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a href="" className='hover:text-textGreen duration-300'>
                                    <TbBrandGithub />
                                </a>
                                <a href="" className='hover:text-textGreen duration-300'>
                                    <AiOutlineYoutube />
                                </a>
                                <a href="" className='hover:text-textGreen duration-300'>
                                    <RxOpenInNewWindow/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {Project Two} */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row-reverse gap-6'>
                        <a href="https://www.musixmatch.com/" target='_blank' className='w-full xl:w-1/2 h-auto relative group'>
                            <div>
                                <Image className='w-full h-full object-contain' src={musixmatch} alt='musixmatch'/>
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>
                                Musixmatch
                            </h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, voluptas ipsam eveniet adipisci possimus eligendi neque rerum eaque, <span className='text-textGreen' >reprehenderit</span> labore necessitatibus quod quas eum. Laudantium temporibus perferendis pariatur fugit vero.
                            </p>
                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>Nextjs</li>
                                <li>Typescript</li>
                                <li>Next-auth</li>
                                <li>Stripe</li>
                                <li>Vercel Deployment</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a href="" className='hover:text-textGreen duration-300'>
                                    <TbBrandGithub />
                                </a>
                                <a href="" className='hover:text-textGreen duration-300'>
                                    <AiOutlineYoutube />
                                </a>
                                <a href="" className='hover:text-textGreen duration-300'>
                                    <RxOpenInNewWindow/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {Project Three} */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a href="https://changelly.com/" target='_blank' className='w-full xl:w-1/2 h-auto relative group'>
                            <div>
                                <Image className='w-full h-full object-contain' src={changelly} alt='changelly'/>
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>
                                Changelly
                            </h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, voluptas ipsam eveniet adipisci possimus eligendi neque rerum eaque, <span className='text-textGreen' >reprehenderit</span> labore necessitatibus quod quas eum. Laudantium temporibus perferendis pariatur fugit vero.
                            </p>
                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>Nextjs</li>
                                <li>Typescript</li>
                                <li>Next-auth</li>
                                <li>Stripe</li>
                                <li>Vercel Deployment</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a href="" className='hover:text-textGreen duration-300'>
                                    <TbBrandGithub />
                                </a>
                                <a href="" className='hover:text-textGreen duration-300'>
                                    <AiOutlineYoutube />
                                </a>
                                <a href="" className='hover:text-textGreen duration-300'>
                                    <RxOpenInNewWindow/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects