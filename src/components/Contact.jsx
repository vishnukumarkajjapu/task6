import React, { useState } from 'react'
import { BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

const Contact = () => {
    const [isContact, setisContact] = useState(false)
    return (
        <div className='h-screen text-black grid place-content-center text-center' id='contact'>
            <button onClick={() => { setisContact(!isContact) }} className='text-xl text-white my-3'>Contact <span className='text-base'> {!isContact ? "+" : "-"}</span></button>
            {
                isContact && <div className='bg-white px-10 py-5 text-start rounded-md'>
                    <h1>Email:<span className=''>chandua.royal@gmail.com</span></h1>
                    <h1>Phone:<span className=''>+91 7981979909</span></h1>
                    <div className='flex w-full justify-between items-center px-10 group my-2'>
                        <a href='#'><BiLogoTwitter style={{ fontSize: '18px' }} /></a>
                        <a href='https://www.linkedin.com/in/achanduroyal/'><BiLogoLinkedin style={{ fontSize: '18px' }} /></a>
                        <a href='https://github.com/ChanduRoyalA'><AiFillGithub style={{ fontSize: '18px' }} /></a>
                    </div>
                </div>
            }
        </div>
    )
}

export default Contact
