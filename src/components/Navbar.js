import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons';
import Logo from './Logo';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {

  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`} >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 ease ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link >
  )
}
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
      <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between'
      >
        <nav>
          <CustomLink href='/' title='Home' className='mr-4' />
          <CustomLink href='/about' title='About' className='mx-4' />
          <CustomLink href='/projects' title='Projects' className='mx-4' />
          <CustomLink href='/articles' title='Articles' className='ml-4' />
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a href="https://twitter.com/_gyaan_"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mx-3'
          >
            <TwitterIcon />
          </motion.a>

          <motion.a href="https://github.com/GyanPrakashKumar"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mx-3'
          >
            <GithubIcon />
          </motion.a>

          <motion.a href="https://linkedin.com/in/gyan-prakash-kumar"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mx-3'
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            className='ml-3 flex items-center justify-center rounded-full p-1'
          >
            {
              mode === 'dark' ? <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />
            }
          </button>

        </nav>
      </header>
      <div className='absolute top-2 left-[50%] translate-x-[-50%]'>
        <Logo />
      </div>
    </>
  )
}

export default Navbar;
