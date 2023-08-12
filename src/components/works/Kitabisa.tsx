import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Kitabisa = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='w-full'>
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                Frontend Engineer <span className='text-textGreen tracking-wide'>@kitabisa</span>
            </h3>
            <p className='text-sm mt-1 font-medium text-textDark'>Jan 2017 - Jul 2019</p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Redesign & maintained web and ensure all work well to any platform (Desktop & mobile).
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Ensure all data backend & all design work well on various browsers desktop or mobile.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Revamp campaign detail especially fund detail already published at Kitabisa prod.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Implement react query, useInfiniteQuery, tailwindcss on campaign detail, pencairan dana, latest news etc.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Research & optimation better code..
                </li>
            </ul>
        </motion.div>
    )
}

export default Kitabisa