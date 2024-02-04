import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const OfferingPage = () => {
    return (
        <div className='relative' id='work'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
                <div className='md:w-2/3 lg:1/2'>
                    <h2 className='my-8 text-2xl font-bold text-gray-700 md:text-4xl'>SwiftLaunchPad Offerings</h2>
                    <p className='text-gray-600'>We can do many things and can help you build following.</p>
                </div>
                {/* <div className='mt-16 flex flex-col md:flex-row gap-2 divide-x divide-y rounded-3xl'> */}
                <div className='mt-16 grid divide-x divide-y rounded-3xl sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4'>
                    <Card>
                        <CardHeader>
                            <CardTitle>SaaS Products</CardTitle>
                            <CardDescription>SaaS</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>We love SaaS.If you have a SaaS product idea,we will make it happen.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-xl font-semibold'>Web Apps</CardTitle>
                            <CardDescription>Apps</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>We can build web applications for you.You just need to have an idea.</p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle className='text-xl font-semibold'>Ai Apps</CardTitle>
                            <CardDescription>AI Apps</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>Have an idea for an awesome AI app?We will build it for you quickly and will help you launch.</p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle className='text-xl font-semibold'>Technical Writing</CardTitle>
                            <CardDescription>Writing</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>We also love writing about technical stuff.If you wnat us to write technical stuff.We can do that.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default OfferingPage