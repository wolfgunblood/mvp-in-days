import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiJavascript, SiTailwindcss,SiVercel,SiSupabase } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

const TechStackPage = () => {
    return (
        <div className='relative' id='tech-stack'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
                <div className='md:w-2/3 lg:1/2'>
                    <h2 className='my-8 text-2xl font-bold text-gray-700 md:text-4xl'>Our TechStack</h2>
                    <p className='text-gray-600'>We are flexible in choosing tech stack but our favorite tech stack are below</p>
                </div>
                {/* <div className='mt-16 flex flex-col md:flex-row gap-2 divide-x divide-y rounded-3xl'> */}
                <div className='mt-16 grid divide-x divide-y rounded-3xl sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4'>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <TbBrandNextjs />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>NextJS</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <SiTypescript />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>Typescript</p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle>
                                <SiJavascript />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>Javascript</p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle>
                                <SiTailwindcss />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>TailWind CSS </p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle>
                                <FaNodeJs />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>Node JS</p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle>
                                <FaReact />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>ReactJS</p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle>
                                <SiSupabase />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>Supabase</p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle>
                                <SiVercel />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-800'>Vercel</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default TechStackPage