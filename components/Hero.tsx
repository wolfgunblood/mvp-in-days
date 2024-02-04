import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
    return (
        <div className='relative' id='hero'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
                <div className='relative pt-80 sm:pt-24 ml-auto flex justify-center items-center h-screen'>

                    <div className='lg:w-2/3 text-center mx-auto'>
                        <div className='flex justify-center mb-2'></div>
                        <p className='text-gray-900 font-semibold text-5xl md:text-6xl xl:text-8xl mt-8 md:mt-0'>
                            Idea to MVP in 15 Days
                        </p>
                        <p className='mt-6 text-gray-700 text-xl'>
                            With a budget-friendly and fixed pricing,we will craft,build
                            <br />
                            and bring your idea to life within 15 days.
                        </p>

                        <div className='mt-8 flex flex-wrap justify-center gap-y-4 gap-x-4'>
                            <Button variant="secondary">See Our Work</Button>
                            <Button>Contact Us</Button>
                        </div>

                        <div className='py-8 mt-16 border-y border-gray-800 sm:flex flex-col sm:flex-row justify-between items-center'>
                            <div className='text-center flex-1 mb-4 sm:mb-0'>
                                <h5 className='text-lg font-semibold text-gray-700'>AI Apps</h5>
                                <p className='mt-2 text-gray-500 px-4'>Have a AI Platform idea?We will build that or you and help you launch</p>
                            </div>
                            <div className='text-center flex-1 mb-4 sm:mb-0'>
                                <h5 className='text-lg font-semibold text-gray-700'>SAAS</h5>
                                <p className='mt-2 text-gray-500 px-4'>Have a Saas Product idea?We got you.We will build your Saas Product.</p>
                            </div>
                            <div className='text-center flex-1 mb-4 sm:mb-0'>
                                <h5 className='text-lg font-semibold text-gray-700'>Web Apps</h5>
                                <p className='mt-2 text-gray-500 px-4'>Want to launch a Web App? No problem.We will make it happen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero