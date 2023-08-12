import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Myelstudio = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='w-full'>
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                Fullstack Designer <span className='text-textGreen tracking-wide'>@myelstudio</span>
            </h3>
            <p className='text-sm mt-1 font-medium text-textDark'>Oct 2019 - Oct 2020</p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Designed, launched and managed multiple project.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Handle requests and queries appropriately.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Researched, sketched and created personas, user journeys/maps, mock ups, wire frames and prototypes (hi & low fidelity).
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Handled and co-created online material for daily updates : designed and created multiple presentations.
                </li>
            </ul>
        </motion.div>
    )
}

export default Myelstudio