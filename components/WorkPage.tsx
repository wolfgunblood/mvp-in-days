import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const WorkPage = () => {
    return (
        <div className='relative' id='work'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
                <div className='md:w-2/3 lg:1/2'>
                    <h2 className='my-8 text-2xl font-bold text-gray-700 md:text-4xl'>Why Choose SwiftLaunchPad?</h2>
                    <p className='text-gray-600'>We have been building products for a long time.We loveto build and launch fast.</p>
                </div>
                {/* <div className='mt-16 flex flex-col md:flex-row gap-2 divide-x divide-y rounded-3xl'> */}
                <div className='mt-16 grid divide-x divide-y rounded-3xl'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Speed</CardTitle>
                            <CardDescription>Speed</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>When building MVP(Minimum Viable Product).Speed is very important and we take pride in our building speed.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-xl font-semibold'>Efficiency</CardTitle>
                            <CardDescription>Efficiency</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>We not only build build fast but we also make sure we are building scalable products.</p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle className='text-xl font-semibold'>Product Delivery</CardTitle>
                            <CardDescription>Product Delivery</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>We will develop your MVP in 15 days (more time required depending on the complexity of project).</p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle className='text-xl font-semibold'>Post launch support</CardTitle>
                            <CardDescription>Post launch</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>In case you need support from us after your launch.We are here for you.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default WorkPage