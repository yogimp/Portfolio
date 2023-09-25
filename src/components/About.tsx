import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"
import { profile } from "../../public"

const About = () => {
    return (
        <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
            <SectionTitle title="About Me" />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>
                        Hello! My name is Yogi Meizal Putra and I enjoy creating thing that live on the internet. My interest in Web and Mobile Development started back in 2016 when i decided to try making e-commerce using wordpress - turn out design and develop UI/UX tought me alot about HTML & CSS!
                    </p>
                    <p>
                        Fast-forward to today, and I had privilege of working at an software agency, a start-up,{" "}
                        <span className="text-textGreen">
                            a huge corporation, and a student-led design studio.
                        </span>{" "}
                        I am committed to continuously learning and keeping up with the latest advancements in web and mobile technology. with a deep love for creating 
                        <span className="text-textGreen"> {" "}
                            visually appealing and user-friendly 
                        </span>{" "}
                        websites.
                    </p>
                    <p>
                        With a keen eye for design and a strong technical background, I strive to craft seamless digital experiences that leave a lasting impression on users. Eagerly embrace new challenges, seeking opportunities to grow both personally and professionally.
                    </p>
                    <p>
                        Here are few technologies I have been working with recently :
                    </p>
                    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Javascript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Next.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            React.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Node.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Typescript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Express.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            MongoDB
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Tailwindcss
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            PHP
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Laravel
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            MySQL
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Flutter
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Figma
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Adobe XD
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt /></span>
                            Postgresql
                        </li>
                    </ul>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 cursor-pointer">
                            <Image src={profile} alt="profile" className="rounded-lg h-full object-cover"/>
                            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/5 rounded-md top-0 left-0 group-hover:bg-transparent duration 300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About