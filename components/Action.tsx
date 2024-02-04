import React from 'react'
import { Button } from '@/components/ui/button'

const ActionPage = () => {
    return (
        <div className='relative'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
                <div className='relative'>
                    <div className='flex itesm-center justify-center h-[40vh] px-2 sm:px-0'>
                        <div className='mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12'>
                            <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700'>Get Started</h1>
                            <p className='text-center text-sm sm:text-base md:text-xl text-gray-600'>Launch your Product MVP in 15 days.Contact us to start the discussion.</p>
                            <div className='flex flex-wrap justify-center gap-4 sm:gap-6'>
                                <Button>Contact Us</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionPage