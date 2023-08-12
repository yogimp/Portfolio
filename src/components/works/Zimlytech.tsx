import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Zimlytech = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='w-full'>
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                Mobile App Developer <span className='text-textGreen tracking-wide'>@zimlytech</span>
            </h3>
            <p className='text-sm mt-1 font-medium text-textDark'>Nov 2020 - Dec 2022</p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Designed and developed mobile apps using Flutter, lifecycle activities of product (design, coding, testing & deployment activities).
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Slicing design from XD / FIGMA / PS or all any design resource to template files.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Wrote technical specifications and maintained all reports pertaining to applications development process.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Research and evaluate alternative solutions and provide.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Managed to migrate the Android to Flutter while also providing several business need for the App.
                </li>
            </ul>
        </motion.div>
    )
}

export default Zimlytech