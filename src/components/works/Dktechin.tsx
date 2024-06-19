import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Dktechin = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='w-full'>
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                User Experience <span className='text-textGreen tracking-wide'>@dktechin</span>
            </h3>
            <p className='text-sm mt-1 font-medium text-textDark'>Dec 2012 - Dec 2016</p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Designs, develops UI-UX for selected projects / products.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Ensure wireframe, storyboard, user-flow, process flow according the Product Business plan.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Revamp new website using one design for all platform.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Re-designed the website and decreased the bounce rate.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Design UI/UX in wireframe and mockup.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Interaction design and prototyping .
                </li>
            </ul>
        </motion.div>
    )
}

export default Dktechin