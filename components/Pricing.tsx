import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'

const PricingPage = () => {
    return (
        <div className='relative text-gray-300' id='work'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
                <div className='mb-10 space-y-4 px-6 md:px-0'>
                    <h2 className='text-center text-2xl font-bold text-gray-700 sm:text-3xl md:text-4xl'>Pricing</h2>
                    <Card className='w-[500px] mx-auto'>
                        <CardHeader>
                            <CardTitle>
                                <div className='flex flex-col gap-4 items-center aspect-auto p-4 pb-0 sm:p-8 sm:pb-0'>
                                    <p className='text-lg sm:text-3xl font-bold text-slate-700'>Product Development</p>
                                    <p className='text-lg sm:text-xl text-center mb-6 mt-2 text-gray-400'><span className='text-3xl sm:text-4xl font-bold text-slate-700'>$3000</span> /Starting at</p>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='flex flex-col gap-4 items-center aspect-auto p-4 pb-0 pt-0 sm:p-8 sm:py-0'>
                                <p className='text-center mb-6 text-gray-600'>
                                    The price of the MVP depends on the complexity of your project.Price at $3000 with guaranteed delivery within the timeline
                                </p>
                                <Button>Contact Us</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PricingPage