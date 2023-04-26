import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>
                    {new Date().getFullYear()} &copy; All Demon Slayed.
                </span>
                <div>
                    Slayed with <span className='text-red-500'>❤</span> by 
                    <Link href='/' className='underline underline-offset-2'>Tanjiro</Link>
                </div>
                <Link href='/'>Say Hi 👋</Link>
            </Layout>
        </footer>
    )
}

export default Footer
