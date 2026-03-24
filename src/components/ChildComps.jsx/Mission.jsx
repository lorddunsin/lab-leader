


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
    <section 
    style={{fontFamily: {
  sans: ["DINPro", "sans-serif"]},
}}
     className="flex flex-col w-full bg-gray-100 py-10 md:py-30 px-5 md:1px-0 lg:px-20 space-y-20">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-5 sm:px-10 md:px-20 mt-10 mb-12"
        id='about'
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-[2.125rem;] font-[700] text-[#1a193a] tracking-wide"
        >
          ABOUT THE RECOGNITION
        </motion.h1>
        <span className="mt-4 text-sm sm:text-base md:text-lg bg-[#f3f3f5] px-4 py-1 rounded-full text-[#1a193a] font-light inline-block">
          A Digital Legacy of Innovation
        </span>

        <div className="mt-6 space-y-4 mb- max-w-4xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg lg:text-text-[1.125rem;] font-[400] text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            The Lab Leader was established to recognize technology and industry leaders whose contributions have reshaped markets and set new global standards of excellence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <strong>Impact Over Hype:</strong> This is not a popularity contest; it is a recognition of leadership and lasting contribution.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <strong>Global Visibility:</strong> Selected leaders are featured across our primary website and dedicated community pages, reaching a network of global industry pioneers.
          </motion.p>
        </div>
      </motion.div>

      {/* Vision & Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'
        >


<div className='bg-white shadow-md'>
  <h1  className="text-2xl sm:text-3xl md:text-[2.125rem] font-[700] text-[#1a193a] tracking-wide bg-[#42b59d] p-7">OUR VISION</h1>
  <p className='text-sm sm:text-base md:text-lg lg:text-[1.125rem] font-[400] text-left p-10 text-[#1a193a]'>To become a globally respected digital honor for product leadership, recognizing pioneers 
whose work improves lives across borders.</p>

</div>

<div className='bg-white shadow-md'>
  <h1  className="text-2xl sm:text-3xl md:text-[2.125rem] font-[700] text-white tracking-wide bg-[#1a193a] p-7">OUR MISSION </h1>
   <p className='text-sm sm:text-base md:text-lg lg:text-[1.125rem] font-[400] text-left p-10 text-[#1a193a]'>Celebrate: To honor visionary leaders shaping the future of products. 
Promote: To champion innovation, integrity, and global collaboration. 
Inspire: To provide a platform that ignites the next generation of creators. 
Spotlight: To highlight leadership that balances growth with responsibility.</p>

</div>

      </motion.div>

    </section>
  )
}

export default Mission