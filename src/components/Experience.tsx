'use client'

import React, {useState} from 'react'
import SectionTitle from './SectionTitle'
import Whitelove from './works/Whitelove'
import Zimlytech from './works/Zimlytech';
import Myelstudio from './works/Myelstudio';
import Kitabisa from './works/Kitabisa';
import Dktechin from './works/Dktechin';

const Experience = () => {

    const[workWhitelove, setWorkWhitelove] = useState(true);
    const[workZimlytech, setWorkZimlyTech] = useState(false);
    const[workMyelstudio, setWorkMyelstudio] = useState(false);
    const[workKitabisa, setWorkKitabisa] = useState(false);
    const[workDktechin, setWorkDktechin] = useState(false);

    const handleWhitelove = () => {
        setWorkWhitelove(true);
        setWorkZimlyTech(false);
        setWorkMyelstudio(false);
        setWorkKitabisa(false);
        setWorkDktechin(false);
    };
    const handleZimlytech = () => {
        setWorkWhitelove(false);
        setWorkZimlyTech(true);
        setWorkMyelstudio(false);
        setWorkKitabisa(false);
        setWorkDktechin(false);
    };
    const handleMyelstudio = () => {
        setWorkWhitelove(false);
        setWorkZimlyTech(false);
        setWorkMyelstudio(true);
        setWorkKitabisa(false);
        setWorkDktechin(false);
    };
    const handleKitabisa = () => {
        setWorkWhitelove(false);
        setWorkZimlyTech(false);
        setWorkMyelstudio(false);
        setWorkKitabisa(true);
        setWorkDktechin(false);
    };
    const handleDktechin = () => {
        setWorkWhitelove(false);
        setWorkZimlyTech(false);
        setWorkMyelstudio(false);
        setWorkKitabisa(false);
        setWorkDktechin(true);
    };

    return (
        <section id='experience' className='max-w-containerxs mx-auto h-screen py-10 lgl:py-24 px-4 flex flex-col gap-4 justify-center'>
            <SectionTitle title="Where I Have Worked" />
            <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
                <ul className='md:w-32 flex flex-col'>
                    <li onClick={handleWhitelove} 
                        className={ `${workWhitelove 
                            ? "border-l-textGreen text-textGreen" 
                            : "border-l-hoverColor text-textDark" } 
                            border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium
                        `}>
                        Whitelove
                    </li>
                    <li onClick={handleZimlytech} 
                        className={ `${workZimlytech 
                            ? "border-l-textGreen text-textGreen" 
                            : "border-l-hoverColor text-textDark" } 
                            border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium
                        `}>
                        ZimlyTech
                    </li>
                    <li onClick={handleMyelstudio} 
                        className={ `${workMyelstudio 
                            ? "border-l-textGreen text-textGreen" 
                            : "border-l-hoverColor text-textDark" } 
                            border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium
                        `}>
                        MyelStudio
                    </li>
                    <li onClick={handleKitabisa} 
                        className={ `${workKitabisa 
                            ? "border-l-textGreen text-textGreen" 
                            : "border-l-hoverColor text-textDark" } 
                            border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium
                        `}>
                        Kitabisa
                    </li>
                    <li onClick={handleDktechin} 
                        className={ `${workDktechin 
                            ? "border-l-textGreen text-textGreen" 
                            : "border-l-hoverColor text-textDark" } 
                            border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium
                        `}>
                        DKTechin
                    </li>
                </ul>
                { workWhitelove && <Whitelove />}
                { workZimlytech && <Zimlytech />}
                { workMyelstudio && <Myelstudio />}
                { workKitabisa && <Kitabisa/>}
                { workDktechin && <Dktechin />}
            </div>
        </section>
    )
}

export default Experience