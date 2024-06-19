import React from 'react'

const RightSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
            <a href = "https://mail.google.com/mail/?view=cm&fs=1&to=yogimeizalputra@gmail.com" target='_blank'>
                <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>yogimeizalputra</p>
            </a>
            <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
        </div>
    )
}

export default RightSide