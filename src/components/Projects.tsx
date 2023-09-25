import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { pepenero, booking, zaltadmin } from '../../public'
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
                        <a href="https://www.pepenerobali.com/" target='_blank' className='w-full xl:w-1/2 h-auto relative group'>
                            <div>
                                <Image className='w-full h-full object-contain' src={pepenero} alt='pepenero'/>
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>
                                Pepenero
                            </h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                            Pepenero offers an extensive modern <span className='text-textGreen'>Italian</span> menu that also includes local fusion favourites in <span className='text-textGreen'>Bali</span> - primi, secondi, pizza and dessert. Our menu changes frequently to reflect seasonal changes and availability of the freshest and <span className='text-textGreen'>best produce</span> available. 
                            </p>
                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>Nextjs</li>
                                <li>Typescript</li>
                                <li>Prisma</li>
                                <li>PostgreSQL</li>
                                <li>Stripe</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a href="https://github.com/yogimp/Pepenero" className='hover:text-textGreen duration-300'>
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
                                <Image className='w-full h-full object-contain' src={zaltadmin} alt='musixmatch'/>
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>
                                Zaltadmin
                            </h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                            Zaltadmin is an admin dashboard project that I created using <span className='text-textGreen'>ReactJs</span>. Here the owner or admin can view and control user and product data on the website. <span className='text-textGreen'>Graphics</span> are provided to make it easier to understand. As well as various other features such as adding, deleting and changing data, making it easier to control or read data.
                            </p>
                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>ReactJs</li>
                                <li>Typescript</li>
                                <li>React Chart</li>
                                <li>Scss</li>
                                <li>Vercel Deployment</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a href="https://github.com/yogimp/Zaltadmin-Dashboard" className='hover:text-textGreen duration-300'>
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
                        <a href="https://www.booking.com/" target='_blank' className='w-full xl:w-1/2 h-auto relative group'>
                            <div>
                                <Image className='w-full h-full object-contain' src={booking} alt='booking.com'/>
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>
                                Booking.com
                            </h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                            <span className='text-textGreen'>Booking.com</span> is an app to make it easier for everyone to experience the world and seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay from homes to hotels, and much more. As one of the <span className='text-textGreen'>worlds largest travel marketplaces</span> for both established brands and entrepreneurs.
                            </p>
                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>ReactJs</li>
                                <li>MongDB</li>
                                <li>NodeJs</li>
                                <li>ExpressJs</li>
                                <li>FontAwesome</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a href="https://github.com/yogimp/Booking-App" className='hover:text-textGreen duration-300'>
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