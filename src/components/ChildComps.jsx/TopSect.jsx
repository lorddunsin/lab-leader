
import React from 'react'
import { motion } from 'framer-motion'
import { main } from 'framer-motion/client'
import { useNavigate } from 'react-router-dom'


function TopSect() {
  const navigate=useNavigate()
  return (
   <main className='grid grid-cols-2'>
     <section className="bg-[#1a193a] py-30">
      
   
      <div className="relative z-10 max-w-6xl mx-auto text-white  px-18 justify-center flex flex-col gap-8">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl text-start sm:text-5xl font-bold md:text-6xl lg:text-6xl leading-tight"
        >
        Honoring Product Excellence in the Digital Age
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base sm:text-lg md:text-2xl text-start font-medium"
        >
         The Lab Leader is a prestigious international recognition celebrating visionary creators
whose pioneering work in product development has transformed industries and created
lasting global impact. This platform honors individuals who do not merely follow trends, but
define them through exceptional execution.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 "
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#49c1ef] self-start px-8 font-bold text-[#1a193a] py-4 text-xl shadow-md hover:shadow-xl transition"
          >
            Nominate
          </motion.button>

       <a href="/#evaluation">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#49c1ef] text-[#49c1ef] px-8 font-bold py-4 text-xl hover:bg-[#49c1ef] hover:text-[#1a193a] transition"
          >
            Learn More
          </motion.button>
       </a>
        </motion.div>

      </div>
    </section>

<section className='bg-[#4ac2f0]'></section>
   </main>

  )
}

export default TopSect
