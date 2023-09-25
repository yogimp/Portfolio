import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from 'framer-motion';

const Archive = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <div className='max-w-contentContainer mx-auto px-4 py-24 archive'>
            <div className='w-full flex flex-col items-center'>
                <h2 className='text-3xl font-titleFont font-semibold'>
                    Other Noteworthy Projects
                </h2>
                <p className='text-sm font-titleFont text-textGreen'>
                    view the archive
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                <ArchiveCard 
                    title= 'Pizza-Town' 
                    des= 'Pizza Town is an online ordering web application that makes it easy for users to order online and deliver quickly. This web application was created using PHP and MYSQL database management system.' 
                    listItem= {["PHP", "Bootstrap", "MySql"]} 
                    link= "https://github.com/yogimp/Pizza-Town"
                />
                <ArchiveCard 
                    title= 'Monster-Chase' 
                    des= 'Monster Chase is a personal game project that I created. This is just a simple game that I made using C# language and is very fun to play. In the future I will make this game have many features and levels of play.' 
                    listItem= {["C#", "Unity", "Vscode"]} 
                    link= "https://github.com/yogimp/Monster-Chase"
                />
                <ArchiveCard 
                    title= 'Trouvel-Apps' 
                    des= 'Travel application especially for mobile. This project create using flutter so user Iphone or Android can use it, a very attractive appearance and is user friendly so that users can easily book via phone or tablet.' 
                    listItem= {["Flutter", "Dart", "Swift"]} 
                    link= "https://github.com/yogimp/Trouvel-Apps"
                />
                {
                    showMore && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }} 
                                transition={{ delay: 0.1 }}
                            >
                                <ArchiveCard 
                                    title= 'Lama-Shop' 
                                    des= 'E-Commerce Clothing Website that user can be order and payment via online. This website responsive even a user using mobile phone can easyly using this website throught a browser.' 
                                    listItem= {["ReactJS", "ExpressJS", "MongoDB"]} 
                                    link= "https://github.com/yogimp/Lama-Shop"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }} 
                                transition={{ delay: 0.2 }}
                            >
                                <ArchiveCard 
                                    title= 'Omnifood' 
                                    des= 'Premium Website Delivery Services Omnifood is a premium food delivery service with the mission to bring affordable and healty meals to as many people as possible.' 
                                    listItem= {["Javascript", "HTML", "CSS"]} 
                                    link= "https://github.com/yogimp/Omnifood"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }} 
                                transition={{ delay: 0.3 }}
                            >
                                <ArchiveCard 
                                    title= 'Dinner-Dash' 
                                    des= 'Diner Dash is like an other project im usually make but this time im using Laravel as Framework, this web app is simple UI so user can get a fast and better performance.' 
                                    listItem= {["Laravel", "PHP", "Blade"]} 
                                    link= "https://github.com/yogimp/Dinner-Dash"
                                />
                            </motion.div>
                        </>
                    )
                }
            </div>
            <div className='mt-12 flex items-center justify-center'>
                {
                    showMore ? (
                        <button 
                            onClick={() => setShowMore(false)}
                            className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                            Show less
                        </button>
                    ) : (
                        <button 
                            onClick={() => setShowMore(true)}
                            className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                            Show More
                        </button> 
                    )
                }
            </div>
        </div>
    )
}

export default Archive