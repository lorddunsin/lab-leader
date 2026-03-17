


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
    <section className="flex flex-col w-full  py-20 space-y-20">
      
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

      {/* Vision & Mission Section */}
      <section className="bg-[#f3f3f5] w-full py-20 px-5 md:px-20 text-center">
        <motion.h1
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.7, delay: 0.15 }}
                         id='mission'
                          className="text-4xl md:text-5xl font-bold text-[#1a193a] tracking-wide">
          Our Vision & Mission
        </motion.h1>

        <div className=" gap-10 px-30 items-center justify-center flex ">
          {/* Vision Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className=" border border-[#4ac2f0] rounded-full flex flex-col p-8 text-center items-center justify-center space-y-6 mr-[-100px] shadow-lg hover:shadow-2xl transition-transform duration-300  w-150 h-150"
          >
            <div className="mx-auto w-fit text-white bg-gradient-to-br from-[#4ac2f0] to-[#1c94fc] p-5 rounded-2xl text-3xl shadow-md">
              <FaEye />
            </div>

            <h2 className="text-2xl font-bold text-[#1c94fc] ">Our Vision</h2>

            <p className="text-gray-700 font-light text-base md:text-xl space-y-3 font-medium  text-center mx-auto p-10">
              To become a globally respected digital honor for product leadership, recognizing pioneers whose work improves lives across borders.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="border border-[#4ac2f0] rounded-full p-10 text-center  flex flex-col items-center space-y-6 w-150 h-150 mt-70 shadow-lg hover:shadow-2xl transition-transform duration-300"
          >
            <div className="mx-auto w-fit text-white bg-gradient-to-br from-[#4ac2f0] to-[#1c94fc] p-5 rounded-2xl text-3xl shadow-md">
              <FiTarget />
            </div>

            <h2 className="text-2xl font-bold text-[#1c94fc]">Our Mission</h2>

            <ul className="text-gray-700 font-light text-base md:text-xl font-medium space-y-3 text-center mx-auto p-10">
              <li> <strong>Celebrate:</strong> To honor visionary leaders shaping the future of products.</li>
              <li><strong>Promote:</strong> To champion innovation, integrity, and global collaboration.</li>
              <li> <strong>Inspire:</strong> To provide a platform that ignites the next generation of creators.</li>
              <li><strong>Spotlight:</strong> To highlight leadership that balances growth with responsibility.</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </section>
  )
}

export default Mission