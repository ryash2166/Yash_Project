import React from 'react'
import logo from '../assets/Images/logo1.png'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    return (
    <div className='flex flex-col bg-[#f2f6f9] min-h-screen pt-10 px-4'>
      <div className='flex items-center justify-center p-10 container max-w-xl w-full  max-xl:w-auto mx-auto my-auto text-center bg-white rounded-md shadow-lg'>
        <div className="w-full ">
            <div className="w-full mx-auto">
                <span className='relative block mb-3 text-3xl font-extrabold'>
                    <img src={logo} alt="Logo" className='h-16 mx-auto mb-6' />
                </span>
                <h3 className='text-4xl font-bold text-foreground'>{t('main.header')}</h3>
                <div className='mt-8'>
                    <div className="grid gap-4 mt-6">
                    <button className="text-sm border-none  bg-[#40b5e8] hover:bg-primary-focus inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 px-4 transition  text-white  hover:bg-sky-500 hover:text-white" onClick={() => navigate('/login')}>{t('main.button_msg')}</button>
                    <div className="w-full text-right"><p className="px-0 py-0.5 text-sm text-[#40b5e8] font-medium hover:text-sky-500 hover:underline transition-colors">{t('main.password')}</p></div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>    
      <div className="flex items-center justify-center gap-4 py-6 text-sm text-center"><a className="transition hover:text-sky-500">{t('main.policy')}</a><span>|</span><a className="transition hover:text-sky-500">{t('main.terms')}</a></div>
    </div>
  )
}


export default Home