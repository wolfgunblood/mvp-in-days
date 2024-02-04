import React from 'react'

const FooterPage = () => {
  return (
    <footer className='border-t border-gray-100'>
        <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
            <div className='md:flex md:justify-between'>
                <div className='grid grid-cols-2 gap-8 sm:gap-24 sm:grid-cols-3'>
                    <div className='text-left'>
                        <h2 className='mb-6 text-sm font-semi-bold text-gray-700 uppercase'>RESOURCES</h2>
                        <ul className='text-gray-500 font-medium'>
                            <li className='mb-4'>
                                Testimonials
                            </li>
                            <li className='mb-4'>
                                BoilerPlate
                            </li>
                            <li className='mb-4'>
                                AI
                            </li>
                            <li className='mb-4'>
                                SaaS
                            </li>
                        </ul>
                    </div>
                    <div className='text-left'>
                        <h2 className='mb-6 text-sm font-semi-bold text-gray-700 uppercase'>FOLLOW US</h2>
                        <ul className='text-gray-500 font-medium'>
                            <li className='mb-4'>
                                Twitter
                            </li>
                            <li className='mb-4'>
                                LinkedIn
                            </li>
                        </ul>
                    </div>
                    <div className='text-left'>
                        <h2 className='mb-6 text-sm font-semi-bold text-gray-700 uppercase'>LEGAL</h2>
                        <ul className='text-gray-500 font-medium'>
                            <li className='mb-4'>
                                Privacy Policy
                            </li>
                            <li className='mb-4'>
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterPage