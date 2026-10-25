'use client';import {motion} from 'framer-motion';export function GlowingPanel({children,className=''}:{children:React.ReactNode;className?:string}){return <motion.section initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.45}} className={`glass-panel ${className}`}>{children}</motion.section>}

