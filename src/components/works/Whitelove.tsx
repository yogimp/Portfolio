import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Whitelove = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='w-full'>
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                Founder <span className='text-textGreen tracking-wide'>@whitelove</span>
            </h3>
            <p className='text-sm mt-1 font-medium text-textDark'>May 2017 - Present</p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Organized the team to serve clients professionally and negotiated any request of services by clients.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Analyzed the market needs and the ongoing trends.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>
                    Provided outstanding services to every clients.
                </li>
            </ul>
        </motion.div>
    )
}

export default Whitelove