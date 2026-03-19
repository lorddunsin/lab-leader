

import React from 'react'
import { FaEye } from 'react-icons/fa6'
import { FiTarget } from 'react-icons/fi'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

function Mission() {
  return (
    <section className="flex flex-col w-full  space-y-20">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-5 md:px-20 mt-30 mb-50"
        id='about'
      >
        <motion.h1
                           initial={{ opacity: 0, y: 50 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.7, ease: 'easeOut' }}  className="text-4xl md:text-5xl font-bold text-[#1a193a] tracking-wide"
                           >
          About the Recognition
        </motion.h1>
        <span className="mt-4 text-lg md:text-xl bg-[#f3f3f5] px-5 py-2 rounded-full text-[#1a193a] font-light inline-block">
          A Digital Legacy of Innovation
        </span>

        <div className="mt-8 space-y-4 max-w-4xl mx-auto text-gray-700 font-medium text-lg md:text-xl">
          <motion.p
                           initial={{ opacity: 0, y: 40 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.7, delay: 0.15 }}>
            The Lab Leader was established to recognize technology and industry leaders whose contributions have reshaped markets and set new global standards of excellence.
          </motion.p>
          <motion.p
                           initial={{ opacity: 0, y: 40 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.7, delay: 0.15 }}>
            <strong>Impact Over Hype:</strong> This is not a popularity contest; it is a recognition of leadership and lasting contribution.
          </motion.p>
          <motion.p
                           initial={{ opacity: 0, y: 40 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.7, delay: 0.15 }}>
            <strong>Global Visibility:</strong> Selected leaders are featured across our primary website and dedicated community pages, reaching a network of global industry pioneers.
          </motion.p>
        </div>
      </motion.div>

        <section className="relative bg-[url('/img2.jpg')] pb-40 pt-30 bg-cover bg-center bg-no-repeat min-h-[60vh] sm:min-h-[70vh] px-4 sm:px-8 lg:px-16 py-12 w-full ">
        <div className="absolute inset-0 bg-black/70"></div>

<div className='z-10 w-full flex flex-col text-white'>
  <motion.h1
                           initial={{ opacity: 0, y: 50 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.7, ease: 'easeOut' }}  className="text-4xl md:text-5xl z-10  font-bold flex self-center tracking-wide"
                           >
          Vision & Mission
        </motion.h1>


<motion.div
 initial={{ opacity: 0, y: 50 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.7, ease: 'easeOut' }} className="mt-8   font-medium z-10  text-lg md:text-xl flex flex-col self-start w-150 mt-50 seft-start  justify-left bg-white/20 backdrop-blur-md p-6 rounded-lg text-white">

  <h1  className="text-4xl md:text-5xl font-bold flex mb-5  tracking-wide"
                           >
          Vision
        </h1>
<p className='leading-10'>

To become a globally respected digital honor for product leadership, recognizing pioneers 
whose work improves lives across borders. 

</p>
         
        </motion.div>

<motion.div
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7, ease: 'easeOut' }} className="mt-8 z-10  flex  flex-col self-end font-medium text-lg md:text-xl w-150  bg-white/20 backdrop-blur-md p-6 rounded-lg text-white">

  <h1  className="text-4xl md:text-5xl font-bold flex mb-5  tracking-wide"
                           >
         Mission 
        </h1>
<p className='leading-10'>
Celebrate: To honor visionary leaders shaping the future of products. 
Promote: To champion innovation, integrity, and global collaboration. 
Inspire: To provide a platform that ignites the next generation of creators. 
Spotlight: To highlight leadership that balances growth with responsibility.

</p>
         
        </motion.div>
                             </div>


        </section>
      
    </section>
  )
}

export default Mission