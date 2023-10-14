import { useState } from "react"
import clinigo from "../img/clinigo.jpg"
import { TbBrandNextjs, TbApi } from 'react-icons/tb'
import { BiLogoTailwindCss, BiLogoMongodb, BiLogoReact, BiLogoBootstrap } from 'react-icons/bi'


const About = () => {
    const [isAbout, setisAbout] = useState(true)
    const [isExp, setisExp] = useState(true)
    const [isProjects, setisProjects] = useState(false)
    return (
        <section id='about' className='h-auto w-fit grid  text-white px-5 md:px-52 py-5'>
            <div className='my-3'>
                <button onClick={() => { setisAbout(!isAbout) }} className='items-center flex gap-2 text-3xl hover:text-slate-200'>ABOUT <span className='text-base'> {!isAbout ? "+" : "-"}</span></button>
                {
                    isAbout && <div className='py-3 px-6'>
                        <p>An intermediate <span className='font-bold italic'>FULLSTACK</span> Developer, Knowledgeable in user interface, testing, and debugging processes. Committed to
                            creating an environment that is conducive to achieving customer satisfaction. Dedicated, hardworking, and committed to
                            becoming a dependable and valuable team member. Able to <span className='font-bold italic'>effectively self-manage</span> during independent projects, as well
                            as <span className='font-bold italic'>collaborate</span> in a team setting</p>
                    </div>
                }
            </div>
            <div className='my-3'>
                <button onClick={() => { setisExp(!isExp) }} className='items-center flex gap-2 text-3xl hover:text-slate-200'>EXPERIENCE <span className='text-base'>{!isExp ? "+" : "-"}</span></button>
                {
                    isExp && <div className='py-3 px-6'>
                        <div className='flex items-center gap-4'>
                            <a href='#' className='hover:text-blue-300 hover:underline'>Clinigo</a>
                            <img src={clinigo} width={30} className="rounded " />
                            <span className=' text-xs  bg-orange-400 px-2 py-1 rounded-md '>Intern</span>
                            <span className=' text-xs  px-2 py-1 rounded-md border-2 border-white'>5thSep23 - 5thNov23 </span>

                        </div>
                        <p className="mt-3">Clinigo is a startup pre-incubated at VITTBI, provides digital solutions to Healthcare Service Providers like Clinics, Hospitals, Labs, etc. This platform connects patients with Health Service Providers and aims to eliminate all the paperwork required to avail Healthcare Services.</p>
                        <div className='mt-4'>
                            <h1 My className='text-sm'>MY JOB</h1>
                            <p>
                                Developing and managing the company’s website. <br />
                                Working with a team of developers to build user-friendly and engaging website

                            </p>
                        </div>
                    </div>
                }
            </div>
            <div className='my-3'>
                <button onClick={() => { setisProjects(!isProjects) }} className='items-center flex gap-2 text-3xl hover:text-slate-200'>PROJECTS <span className='text-base'> {!isProjects ? "+" : "-"}</span></button>
                {
                    isProjects &&
                    <div className="py-3 px-6 flex flex-col gap-2 ">
                        <div className="group w-fit">
                            <div className="border-2 px-6 py-3 rounded-lg group-hover:text-black group-hover:bg-white">
                                <div className="flex items-center  justify-between flex-col md:flex-row">
                                    <div className="flex items-center flex-col md:flex-row">
                                        <h1 className="font-bold text-xl">FullStack Todo-List</h1>
                                        <div className="flex px-3 py-2 gap-2">
                                            <TbBrandNextjs style={{ fontSize: '22px' }} />
                                            <BiLogoTailwindCss style={{ fontSize: '22px' }} />
                                            <BiLogoMongodb style={{ fontSize: '22px' }} />
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <a href="#" className="text-xs bg-red-400 rounded px-2 py-1">Repository</a>
                                        <a href="#" className="text-xs bg-red-400 rounded px-2 py-1">Not yet Deployed</a>
                                    </div>
                                </div>

                                <p >This project is a Full Stack Todo List Application which is built using the <span className='font-bold italic'>MongoDB</span>,<span className='font-bold italic'>NextJS</span>, <span className='font-bold italic'>TailWindCSS</span>. It implements all the basic functionalities of a todo list, i.e, CRUD Operations (Create Read Update Delete).</p>
                                <ul className="px-3 mt-2 font-bold italic">
                                    <li>Users are able to Create new tasks.</li>
                                    <li>Users are able to Read the created tasks data.</li>
                                    <li>Users are able to Complete the task by checking off the task with a strike through.</li>
                                    <li>Users are able to Delete the task.</li>
                                </ul>


                            </div>
                        </div>
                        <div className="group w-fit">
                            <div className="border-2 px-6 py-3 rounded-lg  group-hover:text-black group-hover:bg-white">
                                <div className="flex items-center justify-between flex-col md:flex-row">
                                    <div className="flex items-center flex-col md:flex-row">
                                        <h1 className="font-bold text-xl">Game Store</h1>
                                        <div className="flex px-3 py-2 gap-2">
                                            <BiLogoReact style={{ fontSize: '22px' }} />
                                            <BiLogoBootstrap style={{ fontSize: '22px' }} />
                                            <TbApi style={{ fontSize: '22px' }} />

                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <a href="https://github.com/ChanduRoyalA/MGameStore" className="text-xs bg-green-400 rounded px-2 py-1">Repository</a>
                                        <a href="https://chanduroyala.github.io/MGameStore/" className="text-xs bg-green-400 rounded px-2 py-1">Deployed</a>
                                    </div>
                                </div>
                                <p>This project is a Game Store Application which is built using the <span className='font-bold italic'>React JS</span>,<span className='font-bold italic'>BootStrap</span>, <span className='font-bold italic'>API</span>. It implements all the basic functionalities where users can view the available game and can add them into cart.</p>
                                <ul className="px-3 mt-2 font-bold italic">
                                    <li>Users are able to add new game to cart.</li>
                                    <li>Users are able to Read the details of the game.</li>
                                    <li>Users are able to view the preview of the game if available</li>
                                    <li>Users are able to view the store in which the game is available</li>
                                </ul>
                            </div>
                        </div>
                        <div className="group w-fit">
                            <div className="border-2 px-6 py-3 rounded-lg group-hover:text-black group-hover:bg-white">
                                <div className="flex items-center  justify-between flex-col md:flex-row">
                                    <div className="flex items-center">
                                        <h1 className="font-bold text-xl">Weather App</h1>
                                        <div className="flex px-3 py-2 gap-2">
                                            <BiLogoReact style={{ fontSize: '22px' }} />
                                            <BiLogoBootstrap style={{ fontSize: '22px' }} />
                                            <TbApi style={{ fontSize: '22px' }} />

                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <a href="https://github.com/ChanduRoyalA/Weather-App" className="text-xs bg-green-400 rounded px-2 py-1">Repository</a>
                                        <a className="text-xs bg-red-400 rounded px-2 py-1">Not yet Deployed</a>
                                    </div>
                                </div>
                                <p>This project is a Weather Application which is built using the <span className='font-bold italic'>ReactJS</span>,<span className='font-bold italic'>BootStrap</span>, <span className='font-bold italic'>API</span>. It gives the basic details the weather in the city</p>
                                <ul className="px-3 mt-2 font-bold italic">
                                    <li>Users are able to Search the city to view the details of Weather</li>
                                    <li>Users are able to Search mutiple Cities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </section>
    )
}

export default About
