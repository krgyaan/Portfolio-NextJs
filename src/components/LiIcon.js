import {motion, useScroll} from 'framer-motion'

const LiIcon = ({refe}) => {
    const { scrollYProgress } = useScroll(
        {
            target: refe,
            offset: ["center end", "center center"]
        },
    );
    return (
        <figure className='absolute stroke-dark left-0'>
            <svg className='-rotate-90' width='75' height='74' viewBox='0 0 100 100'>
                <circle cx='75' cy='50' r='20' className='stroke-primary stroke-1 fill-none' />
                <motion.circle style={{ pathLength: scrollYProgress }} cx='75' cy='50' r='20' className='stroke-[4px] fill-light' />
                <circle cx='75' cy='50' r='10' className='animate-pulse stroke-1 fill-primary' />
            </svg>
        </figure>
    )
}

export default LiIcon
