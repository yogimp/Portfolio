import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialYoutube, SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram  } from 'react-icons/sl'

const LeftSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
            <div className='flex flex-col gap-4'>
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
            <div className='w-[2px] h-32 bg-textDark'></div>
        </div>
    )
}

export default LeftSide 