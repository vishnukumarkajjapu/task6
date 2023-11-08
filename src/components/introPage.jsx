import myProfile from '../img/myProfile.jpg'
import { BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

const IntroPage = () => {
    return (
        <section className=' flex justify-center flex-col md:flex-row items-center h-[92vh] text-white gap-10 md:gap-96 ' id='home'>
            <div className=' flex flex-col gap-2'>
                <div className='px-2 py-1'>
                    <h1 className='text-base text-slate-400'>Hi,I am</h1>
                    <h1 className='text-4xl'>vishnu kumar k</h1>
                    <p className='font-bold'><span className='text-green-600'>FullStack Dev</span> || <span className='text-green-400'>UI/UX</span>  || <span className='text-green-600'>Gamer</span></p>
                </div>
                <div className='flex w-full justify-between items-center px-4 group'>
                    <a href='#'><BiLogoTwitter style={{ fontSize: '18px' }} /></a>
                    <a href='https://www.linkedin.com/in/achanduroyal/'><BiLogoLinkedin style={{ fontSize: '18px' }} /></a>
                    <a href='https://github.com/ChanduRoyalA'><AiFillGithub style={{ fontSize: '18px' }} /></a>
                </div>
            </div>
            <div className='bg-red-100 rounded-full overflow-hidden h-60 w-60 flex justify-center items-center'>
                <img src={myProfile} />
            </div>
        </section>
    )
}

export default IntroPage
