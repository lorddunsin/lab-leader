



import React from 'react'
import { motion } from 'framer-motion'

function TopSect() {
  return (
    <main style={{fontFamily: {
  sans: ["DINPro", "sans-serif"]},
}}
     className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      
      {/* LEFT SIDE */}
      <section className="bg-[#1a193a] py-10 lg:py-14">
        <div className="relative z-10 max-w-6xl mx-auto m text-white px-6 sm:px-10 lg:px-16 flex flex-col justify-center gap-6 sm:gap-8">

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-left"
          >
            HONORING PRODUCT EXCELLENCE IN THE DIGITAL AGE
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-left"
          >
            The Lab Leader is a prestigious international recognition celebrating visionary creators
            whose pioneering work in product development has transformed industries and created
            lasting global impact. This platform honors individuals who do not merely follow trends,
            but define them through exceptional execution.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#49c1ef] w-full sm:w-auto px-6 py-3  text-base sm:text-lg font-bold text-[#1a193a] shadow-md hover:shadow-xl transition"
            >
              Nominate
            </motion.button>

            <a href="/#evaluation" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#49c1ef] w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-bold text-[#49c1ef] hover:bg-[#49c1ef] hover:text-[#1a193a] transition"
              >
                Learn More
              </motion.button>
            </a>
          </motion.div>

        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="bg-[#4ac2f0] min-h-[300px] flex items-center px-20 lg:min-h-full">
         <img
          src="/bgimg4.png"
          alt="Logo"
          // className="w-28 sm:w-32 md:w-36 cursor-pointer"
        />
      
      </section>

    </main>
  )
}

export default TopSect